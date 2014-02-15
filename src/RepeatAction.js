Pixel.RepeatAction = function(action, times){
	this.action = action;
    this.times = times;
	
	this.start = function(){
		this.currentCycle = 0;
	}

	this.update = function(currentTime){
		if(this.currentCycle < this.times){
			this.action.tick(currentTime);
			if(action.isFinished()){
				this.currentCycle++;
                action.reset();
			}
			return true;
		} 
		return false;
	}
	
	this.reset = function(){
		Pixel.RepeatAction.prototype.reset.call(this);
		this.action.init();
	}
}

Pixel.RepeatAction.prototype = Pixel.Action;