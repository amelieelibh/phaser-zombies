/* Boot Screen */

_states.stPreload = function(game){
	this.game = game;
};
_states.stPreload.prototype = {
	preload : function(game){
		// set background color and preload image
		this.stage.backgroundColor = '#FFF';
		this.preloadBar = this.add.sprite((_states.GAME_WIDTH-311)/2, (_states.GAME_HEIGHT-27)/2, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);
		/*
		game.load.atlas('tank', 'assets/games/tanks/tanks.png', 'assets/games/tanks/tanks.json');
	    game.load.atlas('enemy', 'assets/games/tanks/enemy-tanks.png', 'assets/games/tanks/tanks.json');
	    game.load.image('logo', 'assets/games/tanks/logo.png');
	    */
	    game.load.image('bullet', 'assets/img/objects/fx/bullet.png');
	    game.load.image('earth', 'assets/img/world/light_grass.png');
	    
	    game.load.image(constants.SPRITE_HP, 'assets/img/objects/hp.png');
	    
	    game.load.spritesheet(constants.SPRITE_ENEMY, 'assets/img/players/zombie.png', 64, 64, 8);
	    game.load.spritesheet(constants.SPRITE_PLAYER, 'assets/img/players/soldier.png', 139, 191, 3);
	},
	create : function(game){
		console.log("Main.Preloader.create");
        this.game.state.start('mainmenu');
		/* Timer
		var indicator = new VisualTimer({
            "game": game,
            "x": 50,
            "y": 50,
            "seconds": 5,
            onComplete: function() {
            	console.log("X");
            },
            "type" : "down",
            "context" : null,
            "key" : "timer"
        });
		indicator.start(); //start, stop, reset, pause, resume, remainingTime
		*/
	}
};