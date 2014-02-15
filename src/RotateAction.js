Pixel.RotateAction = function(sprite, time, angle){
	this.sprite = sprite;
	this.angle = angle;

	this.start = function(){
		this.startTime = Date.now();
		this.endTime = this.startTime + time * 1000;
		this.orgRotation= this.sprite.rotation;
	}

	this.update = function(currentTime){
		var end = currentTime > this.endTime;
		if(end){
			currentTime = this.endTime;
		}
		
		var progress = (currentTime - this.startTime) / (this.endTime - this.startTime);
		this.sprite.rotation = this.orgRotation + progress * angle;  
		
		return !end;
	}
}

Pixel.RotateAction.prototype = Pixel.Action;