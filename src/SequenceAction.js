Pixel.SequenceAction = function(){
	this.args = arguments;
	
	this.start = function(){
		this.currentIndex = 0;
	}

	this.update = function(currentTime){
		if(this.currentIndex < this.args.length){
			var action = this.args[this.currentIndex];
			action.tick(currentTime);
			if(action.isFinished()){
				this.currentIndex++;
			}
			return true;
		} 
		return false;
	}
	
	this.reset = function(){
		Pixel.SequenceAction.prototype.reset.call(this);
		for(var i=0; i<this.args.length; i++){
			var action = this.args[i];
			action.reset();
		}
	}
}

Pixel.SequenceAction.prototype = Pixel.Action;