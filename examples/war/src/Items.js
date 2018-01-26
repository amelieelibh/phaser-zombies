/* Items */
function Item(game, x, y, value){
    this.game = game;
    this.value = value;
}
Item.prototype = {
    use : function(target){
    },
    update : function(game){

    },
    kill : function(){
        try{
            if(this.sprite != null){
              this.sprite.destroy();
            }
        }catch(e){

        }
    }
};

function Potion(game, fieldBattle){
    var x = game.world.randomX;
    var y = game.world.randomY;

    Potion.baseConstructor.call(this, game, x, y, constants.POTION_VALUE);

    this.name = constants.SPRITE_HP;

    //  The base of our zombie
    this.sprite = fieldBattle.vars.itemsGroup.create(x, y, constants.SPRITE_HP, 0);
    this.sprite.outOfBoundsKill = true;
    this.sprite.checkWorldBounds = true;
    this.sprite.anchor.set(0.5, 0.5);

    game.physics.enable(this.sprite, Phaser.Physics.ARCADE, true);
    this.sprite.body.immovable = true;
    this.sprite.body.collideWorldBounds = true;
    //this.sprite.body.bounce.setTo(1, 1);

    this.sprite.angle = 0;
    this.sprite.scale = new Phaser.Point(0.1, 0.1);
    this.sprite.bringToTop();
}
constants.InheritanceManager.extend(Potion, Item);

Potion.prototype.use = function(target){
    var currentHP = target.player.sprite.health;
    var spriteResult = target.player.damage(-this.value);
    return currentHP != spriteResult.health;
};
Potion.prototype.update = function(){
  //this.sprite.bringToTop();
};

