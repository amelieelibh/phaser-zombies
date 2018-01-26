var constants = {};
var __cons_params = {
    "π": 3.141592653589793 ,
    "e": 2.718281828459045 ,
    "i": Math.sqrt(-1),

    //GAME CONFIG
    "PLAYER_HEALTH" : 100,
    "PLAYER_MAX_HEALTH" : 100,
    "ENEMY_HEALTH"	: 20,
    "START_ALIVE"	  : true,
    "GUN_AMMO_CARTIGE": 50,
    "GUN_DAMAGE"    : 25,
    "GUN_FIRE_DELAY": 50,
    "GUN_RELOAD_DELAY" : 50,
    "GUN_FIRE_VEL"  : 800,
    "POTION_VALUE"  : 50,

    "VELOCITY_PLAYER"   : 300,
    "VELOCITY_ENEMY"   : 200,
    "ACTION_MAX_DELAY"  : 500,
    "ACTION_MIN_DELAY"  : 200,


    //SPRITES
    "SPRITE_ENEMY"          : "zombie",
    "SPRITE_PLAYER"         : "soldier",
    "SPRITE_FRAME_SHADOW" 	: "shadow",
    "SPRITE_HP"             : "potion",

    InheritanceManager : {
        extend : function(subClass, baseClass) {
            function inheritance() { }
            inheritance.prototype = baseClass.prototype;
            subClass.prototype = new inheritance();
            subClass.prototype.constructor = subClass;
            subClass.baseConstructor = baseClass;
            subClass.superClass = baseClass.prototype;
        }
    }
};

try{
	constants = Object.freeze(__cons_params);
	console.info("Constantes inicializadas correctamente");
}catch(e){
	console.error("El explorador no soporta constantes");
	constants = __cons_params;
}


