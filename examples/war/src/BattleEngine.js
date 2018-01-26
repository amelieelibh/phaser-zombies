/* Batle Engine */
function PlayerSoldier(game, barsGroup, x, y, health){
    this.game = game;
    this.barsGroup = barsGroup;

    //  The base of our soldier
    this.sprite = game.add.sprite(x, y, constants.SPRITE_PLAYER);
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.animations.add('move', [1, 2, 3], 5, true, true);

    //  This will force it to decelerate and limit its speed
    game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.player = this;
    this.sprite.body.drag.set(0.2);
    this.sprite.body.maxVelocity.setTo(500, 500);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.angle = 0;
    this.sprite.scale = new Phaser.Point(0.5, 0.5);
    this.sprite.health = health;
    this._lasthp = 0;  //usado para calcular las barras de salud
    this.sprite.alive = constants.START_ALIVE;

    //current states
    this.target = null;
    this.enemies = [];

    //weapons
    this.bulletGroup = game.add.group();
    this.bulletGroup.enableBody = true;
    this.bulletGroup.physicsBodyType = Phaser.Physics.ARCADE;
    this.weapon = new Gun(this);

    //bars
    this.healthbar = game.add.graphics(0,0);
    this.actionbar = game.add.graphics(0,0);
    barsGroup.add(this.healthbar);
    barsGroup.add(this.actionbar);
}
PlayerSoldier.prototype.kill = function(){
    this.healthbar.clear();
    this.healthbar.destroy();
    this.actionbar.clear();
    this.actionbar.destroy();
    this.sprite.destroy();
};
PlayerSoldier.prototype.damage = function(amount){
    var ss = this.sprite.damage(amount);
    if(ss.health > constants.PLAYER_MAX_HEALTH){
        ss.health = constants.PLAYER_MAX_HEALTH;
    }else if(!ss.alive){
        this.kill();
    }
    return ss;
};
PlayerSoldier.prototype.update = function(){
    if(!this.sprite.alive){
      return;
    }
    //BARS UPDATE
    var xbar = this.sprite.x - this.sprite.width / 2;
    var ybar = this.sprite.y - this.sprite.height / 2 - 15;
    var widthbar = this.sprite.width;
    utils.drawBar(this.healthbar, xbar, ybar, function(pct){
            return utils.rgbToHex((pct > 0.5 ? 1 - 2 * (pct - 0.5) : 1.0) * 255, (pct > 0.5 ? 1.0 : 2 * pct) * 255, 0);
        }, widthbar, 5, this.sprite.health, constants.PLAYER_MAX_HEALTH);

    utils.drawBar(this.actionbar, xbar, ybar + 10, function(pct){
            return utils.rgbToHex(200, 200, 200);
        }, widthbar, 5, this.weapon.waste, this.weapon.delay);
    //END BARS UPDATE

    this._lasthp = this.sprite.health;

    this.weapon.update(this.game);
    if(this.target != null){
        updateDirection(this.sprite, this.target);
        this.weapon.fire(this.sprite, this.target);
    }
};

function EnemyZombie(game, barsGroup, index, player, level){
    var x = game.world.randomX;
    var y = game.world.randomY;

    this.name = constants.SPRITE_ENEMY+index;
    this.game = game;
    this.player = player;
    this.strength = game.rnd.between(1, level * 4);


    //  The base of our zombie
    this.sprite = game.add.sprite(x, y, constants.SPRITE_ENEMY);
    this.sprite.player = this;
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.animations.add('move', [1, 2, 3, 4, 5, 6, 7, 8], 5, true, true);
    this.sprite.name = "sprite_"+this.name;
    this.sprite.health = game.rnd.between(level, constants.ENEMY_HEALTH * level);
    this._maxhealth = this.sprite.health;
    this.sprite.alive = constants.START_ALIVE;

    game.physics.enable(this.sprite, Phaser.Physics.ARCADE, true);
    this.sprite.body.immovable = false;
    this.sprite.body.drag.set(1);
    this.sprite.body.maxVelocity.setTo(350, 350);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.bounce.setTo(0, 0);

    this.sprite.angle = game.rnd.angle();
    this.sprite.scale = new Phaser.Point(1,1);

    //Actions vars
    this.resetFollowDelay();
    this.resetActionDelay();

    //bars
    this.healthbar = game.add.graphics(0,0);
    barsGroup.add(this.healthbar);

    //events
    this.sprite.inputEnabled = true;
    //console.log("inputEnabled for zombie " + index);
    this.sprite.events.onInputDown.add(setTarget);

}
EnemyZombie.prototype.kill = function(){
    this.healthbar.clear();
    this.healthbar.destroy();
    this.sprite.destroy();
};
EnemyZombie.prototype.damage = function(amount) {
    var ss = this.sprite.damage(amount);
    if(!ss.alive){
        this.kill();
    }
    return ss;
};
EnemyZombie.prototype.resetActionDelay = function(){
    this.attackDelay = game.rnd.between(1, constants.ACTION_MIN_DELAY);
};
EnemyZombie.prototype.resetFollowDelay = function(){
    this.followDelay = game.rnd.between(constants.ACTION_MIN_DELAY, constants.ACTION_MAX_DELAY);
};
EnemyZombie.prototype.update = function() {
    if(!this.sprite.alive){
        return;
    }
    //BARS UPDATE
    var xbar = this.sprite.x - this.sprite.width / 2;
    var ybar = this.sprite.y - this.sprite.height / 2 - 15;
    utils.drawBar(this.healthbar, xbar, ybar, function(pct){
            return utils.rgbToHex((pct > 0.5 ? 1 - 2 * (pct - 0.5) : 1.0) * 255, (pct > 0.5 ? 1.0 : 2 * pct) * 255, 0);
        }, this.sprite.width, 5, this.sprite.health, this._maxhealth);
    //END BARS UPDATE



    this.followDelay -= 1;
    if(this.followDelay < 0){
        this.resetFollowDelay();
        performMove(this.sprite, this.player.sprite, constants.VELOCITY_ENEMY, true);
    }

    this.attackDelay -= 1;
    if (this.attackDelay < 0 && this.game.physics.arcade.distanceBetween(this.sprite, this.player.sprite) < 50)
    {
      this.resetActionDelay();
      this.player.damage(this.strength);
    }
};

function bulletHitEnemy(bullet, target){
    this.owner.bulletGroup.removeChild(bullet);
    bullet.kill();
    if(!target.player.damage(this.damage).alive){
        if(target == target.player.player.target){
            this.owner.target = null;
            this.upgrade();
        }
    }
    bullet.destroy();
}
function collectItem(item, target){
    var used = false;
    if(this instanceof Potion){
        used = this.use(target);
    }
    if(used){
        item.kill();
    }
}

function doMoveStart(pointer, event){//(source, pointer){
    //console.log("dragStart ["+pointer.worldX+","+pointer.worldY+"]");
    if(!game.state.states[game.state.current].vars.startMove){
        game.state.states[game.state.current].vars.startMove = true;
        game.state.states[game.state.current].vars.moveStart = new Phaser.Point(
            pointer.x, pointer.y);
    }
}
function doMoveEnd(pointer, event){//(source, pointer){
    //console.log("dragStops ["+pointer.worldX+","+pointer.worldY+"]");
    game.state.states[game.state.current].vars.startMove = false;
    //var dest = new Phaser.Point(pointer.worldX, pointer.worldY);
    var dest = game.state.states[game.state.current].vars.moveStart;
    dest.x = game.state.states[game.state.current].vars.soldier.sprite.x + pointer.x - dest.x;
    dest.y = game.state.states[game.state.current].vars.soldier.sprite.y + pointer.y - dest.y;
    game.state.states[game.state.current].vars.moveDestiny = dest;

    performMove(game.state.states[game.state.current].vars.soldier.sprite, dest, constants.VELOCITY_PLAYER, false);

    game.state.states[game.state.current].vars.soldier.sprite.play("move", 5, true);
}

function setTarget(source, pointer){
    game.state.states[game.state.current].vars.soldier.target = source;
}

function performMove(origin, destiny, vel, needUpdateDir, fixAngle){
    game.physics.arcade.moveToObject(origin, destiny, vel);
    if(needUpdateDir == true){
        updateDirection(origin, destiny, fixAngle);
    }
    origin.play("move");
}
function updateDirection(origin, destiny, fixAngle){
    origin.rotation = this.game.physics.arcade.angleBetween(origin, destiny);
    origin.angle += (fixAngle == undefined ? 90 : fixAngle);
}
function onRestartBattle(){
    game.input.onDown.remove(onRestartBattle);
    game.state.states[game.state.current].startGame(game);
};

