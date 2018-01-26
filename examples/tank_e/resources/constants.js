var constants = {};
var __cons_params = {
    "π": 3.141592653589793 ,
    "e": 2.718281828459045 ,
    "i": Math.sqrt(-1),

    //GAME CONFIG
    "ENEMY_HEALTH"	: 3,
    "FIRE_RATE"		: 1000,
    "NEXT_FIRE" 	: 0,
    "START_ALIVE"	: true,


    //SPRITES
    "SPRITE_KEY_ENEMY"		: 'enemy',
    "SPRITE_FRAME_SHADOW" 	:'shadow',
    "SPRITE_FRAME_TANK1"	: 'tank1',
    "SPRITE_FRAME_TURRET"	: 'turret',

};

try{
	constants = Object.freeze(__cons_params);
	console.info("Constantes inicializadas correctamente");
}catch(e){
	console.error("El explorador no soporta constantes");
	constants = __cons_params;
}


