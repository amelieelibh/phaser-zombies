/* STATE: Battle */
_states.stBattle = function(game) {
  	//console.log("game",game);
  	this.game = game;
  	this.vars = {
		"land" : null,
		
		"shadow" : null,
		"shadowCopy" : null,
		"soldier" : null,
		
		"items"	: [],
		"itemsGroup" : null,
		"enemies" : [],
		"enemiesTotal" : 0,
		"enemiesAlive" : 0,
		
		"barsGroup" : null,
		"barHealth" : null,
		
		"currentSpeed" : 0,
		"cursors" : null,
		"startMove" : false,
		"moveStart"   : null,
		"moveDestiny" : null,
		
		"iteration" : 0,
		
		"timeliveRound" : 80,
		"_elapse_round" : 0
  	};
};

_states.stBattle.prototype = {
	preload: function(game){

	},
	createZombies : function(){
	    this.vars._elapse_round = 0;
	  	//  Create some baddies to waste :)
	  	this.vars.iteration += 1;
	    this.vars.enemiesTotal = this.game.rnd.between(3, 5*this.vars.iteration);

	    for (var i = 0; i < this.vars.enemiesTotal; i++)
	    {
	        this.vars.enemies.push(new EnemyZombie(game, this.vars.barsGroup, i, this.vars.soldier, this.vars.iteration));
	    }
	    this.vars.soldier.enemies = this.vars.enemies;
	    this.vars.soldier.sprite.bringToTop();

	    this.vars.items.push(new Potion(this.game, this));
	},
	create : function(game){
			game.physics.startSystem(Phaser.Physics.ARCADE);
	    game.world.setBounds(-1000, -600, 2000, 1200);//(0, 0, _states.GAME_WIDTH, _states.GAME_HEIGHT);

	    this.vars.cursors = game.input.keyboard.createCursorKeys();
	    game.input.mouse.start();
	    game.input.touch.start();

	    //  Our tiled scrolling background
	    this.vars.land = game.add.tileSprite(0, 0,_states.GAME_WIDTH, _states.GAME_HEIGHT, 'earth');
	    this.vars.land.fixedToCamera = true;

      this.startGame(game);
		
			game.input.onDown.add(doMoveStart);
			game.input.onUp.add(doMoveEnd);
		
	},
	update : function(game){
		if(this.vars.soldier.sprite.alive){
	  		for(var i = 0; i < this.vars.items.length; i++){
	  			  game.physics.arcade.overlap(this.vars.items[i].sprite, this.vars.soldier.sprite, collectItem, null, this.vars.items[i]);
	  		}
		}

	    this.vars.enemiesAlive = 0;

	    for (var i = 0; i < this.vars.soldier.enemies.length; i++)
	    {
	        if (this.vars.soldier.enemies[i].sprite.alive)
	        {
	            this.vars.enemiesAlive++;
	            /*for(var j = i + 2; j < this.vars.enemies.length; j += 3){
	                game.physics.arcade.collide(this.vars.enemies[i].sprite, this.vars.enemies[j].sprite);
	            }*/
	            //game.physics.arcade.overlap(this.vars.bullets, this.vars.enemies[i].soldier, bulletHitEnemy, null, this);
	            this.vars.soldier.enemies[i].update();
	        }
	    }
	    if(this.vars.enemiesAlive > 0){

	    }else{
	      this.createZombies();
	    }

	    //----
	    if(this.vars.moveDestiny != null){
	        var dist = Phaser.Point.distance(this.vars.moveDestiny, this.vars.soldier.sprite);
	        if(dist < 25){
	        	this.vars.soldier.sprite.animations.currentAnim.stop();
	            this.vars.moveDestiny = null;
	            this.vars.soldier.sprite.body.velocity.x = 0;
	            this.vars.soldier.sprite.body.velocity.y = 0;
	        }
	    }
	    this.vars.land.tilePosition.x = -game.camera.x;
	    this.vars.land.tilePosition.y = -game.camera.y;


	    this.vars.soldier.update();
	    for(var i = 0; i < this.vars.items.length; i++){
	        this.vars.items[i].update();
	    }
	},
	render : function(game){
	    this.vars._elapse_round++;
	    //game.debug.text('Enemies: ' + this.vars.enemiesAlive + ' / ' + this.vars.enemiesTotal, 40, 40, null, "32px Arial");
	    if(this.vars._elapse_round < this.vars.timeliveRound){
          game.debug.text('Round: ' + this.vars.iteration, 100, _states.GAME_HEIGHT / 2, "#8AF", "84px Arial");
	    }
	    game.debug.text('Lvl: ' + this.vars.soldier.weapon.level, 40, 40, null, "32px Arial");
	    game.debug.text('Ammo: ' + this.vars.soldier.weapon.ammo, 40, 80, null, "32px Arial");
	    //game.debug.text('delay: ' + this.vars.soldier.weapon.waste, 40, 160, null, "32px Arial");
	    if(!this.vars.soldier.sprite.alive){
	        game.debug.text("GAME OVER", 100, _states.GAME_HEIGHT/2, "#F55", "100px Arial");
	        game.debug.text("SURVIVAL ROUND: " + this.vars.iteration, 150, _states.GAME_HEIGHT/2 + 120, "#F55", "80px Arial");
	        game.input.onDown.add(onRestartBattle);
	    }
	},
	startGame : function(game){
	    this.vars.iteration = 0;
	    
	    // Grupo de Items
      	this.vars.itemsGroup = game.add.group();
		this.vars.itemsGroup.enableBody = true;
    	this.vars.itemsGroup.physicsBodyType = Phaser.Physics.ARCADE;
    	
    	// BARS INITIALIZATION
		this.vars.barsGroup = game.add.group();
		this.vars.barsGroup.enableBody = false;

		if(this.vars.items != undefined && this.vars.items != null){
		  for(var index = 0; index < this.vars.items.length; index++){
		      this.vars.items[index].kill();
		  }
		  this.vars.items = [];
		}
		
		if(this.vars.enemies != undefined && this.vars.enemies != null){
		  for(var index = 0; index < this.vars.enemies.length; index++){
		      this.vars.enemies[index].kill();
		  }
		  this.vars.enemies = [];
		}
		
		if(this.vars.soldier != undefined && this.vars.soldier != null){
			this.vars.soldier.kill();
		}
		
		//Creacion de personajes
		this.vars.soldier = new PlayerSoldier(game, this.vars.barsGroup, 0, 0, constants.PLAYER_HEALTH);
		this.createZombies();
		
		
		//------
	    game.camera.follow(this.vars.soldier.sprite, Phaser.Camera.FOLLOW_TOPDOWN);
	    var wcam = _states.GAME_WIDTH / 16;
	    var hcam = _states.GAME_HEIGHT / 16;
	    game.camera.deadzone = new Phaser.Rectangle(wcam*7, hcam*7, wcam*2, hcam*2);
	    game.camera.focusOnXY(0, 0);
  }
};

