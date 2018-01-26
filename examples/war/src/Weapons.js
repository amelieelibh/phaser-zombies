/* Wepons */
function Weapon(owner, damage, cartige, delay, vel, reloadDelay){
    this.owner = owner;
    this.damage = damage;
    this.ammo = 0; //ammo;
    this.cartige = cartige;
    this.delay = delay;
    this.vel = vel;
    this.reloadDelay = reloadDelay;

    this.waste = 0;
    this.bulletSprites = [];

    this.level = 0;
    this.powned = 5;
}
Weapon.prototype = {
    fire : function(source, target){
        if(this.waste > 0){
            this.waste -= 1;
        }else if(this.ammo > 0){
            this.waste = this.delay - this.level;
            var bulletSprite = this.owner.bulletGroup.create(this.owner.sprite.x, this.owner.sprite.y, "bullet", 0);
            bulletSprite.anchor.set(0.5, 0.5);
            bulletSprite.scale = new Phaser.Point(0.5, 0.5);
            bulletSprite.outOfBoundsKill = true;
            bulletSprite.checkWorldBounds = true;
            this.bulletSprites.push(bulletSprite);

            performMove(bulletSprite, target, this.vel, true, 0);
            this.ammo -= 1;
        }else{
            this.waste = this.reloadDelay;
            this.ammo = this.cartige;
        }
    },
    reload : function(source, target){

    },
    update : function(game){
      //for(var enemy of this.owner.enemies){
      for(var i = 0; i < this.owner.enemies.length; i++){
        var enemy = this.owner.enemies[i];
        game.physics.arcade.overlap(this.bulletSprites, enemy.sprite, bulletHitEnemy, null, this);
        //for(var bs of this.bulletSprites){
          //game.physics.arcade.overlap(bs, enemy, bulletHitEnemy, null, this);
        //}
      }
    },
    upgrade : function(){
        this.powned--;
        if(this.level < 20 && this.powned < 0){
            this.powned = 10;
            this.level++;
        }
    }
};

function Gun(owner){
    Gun.baseConstructor.call(this, owner, constants.GUN_DAMAGE, constants.GUN_AMMO_CARTIGE, constants.GUN_FIRE_DELAY, constants.GUN_FIRE_VEL, constants.GUN_RELOAD_DELAY);
}
constants.InheritanceManager.extend(Gun, Weapon);
