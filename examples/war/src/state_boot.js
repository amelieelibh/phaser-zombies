/* Boot Screen */

_states.stBoot = function(game){
	this.game = game;
};
_states.stBoot.prototype = {
	preload: function(){
		// preload the loading indicator first before anything else
		this.load.image('preloaderBar', 'assets/img/sys/loader.gif');
	},
	create: function(){
		// set scale options
		this.input.maxPointers = 1;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.scale.setScreenSize(true);
		// start the Preloader state
		this.state.start('preloader');
	}
};