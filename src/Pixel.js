var Pixel = {};

Pixel.init = function(){
	this.renderer = PIXI.autoDetectRenderer(400, 300);
	this.requestAnimFrame();
	return this.renderer.view;	
}

Pixel.addAction = function(action){
	this.actions.push(action);
}

//@private 
Pixel.requestAnimFrame = function(){
	var me = this;
	requestAnimFrame(function(){
		me.update();
	});	
}

//@private 
Pixel.actions = [];

//@private 
Pixel.update = function update() {
		this.requestAnimFrame();

	    var currentTime = Date.now();

	    for(var i=0; i < this.actions.length; i++){
	    	this.actions[i].tick(currentTime);
	    }

	    this.renderer.render(stage);
	};

