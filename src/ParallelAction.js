Pixel.ParallelAction = function(){
	this.args = arguments;
	
	this.start = function(){
	}

	this.update = function(currentTime){
		var finished = true;
		for(var i=0; i<this.args.length; i++){
			var action = this.args[i];
			action.tick(currentTime);
			finished = finished && action.isFinished();
		}
		return !finished;
	}
	
	this.reset = function(){
		Pixel.ParallelAction.prototype.reset.call(this);
		for(var i=0; i<this.args.length; i++){
			var action = this.args[i];
			action.reset();
		}
	}
}

Pixel.ParallelAction.prototype = Pixel.Action;