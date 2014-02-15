Pixel.MoveAction = function(sprite, time, x, y){
	this.sprite = sprite;
	this.x = x;
	this.y = y;

	this.start = function(){
		this.startTime = Date.now();
		this.endTime = this.startTime + time * 1000;
		this.orgX = this.sprite.position.x;
		this.orgY = this.sprite.position.y;
	}

	this.update = function(currentTime){
		var end = currentTime > this.endTime;
		if(end){
			currentTime = this.endTime;
		}
		
		var progress = (currentTime - this.startTime) / (this.endTime - this.startTime);
		this.sprite.position.x = this.orgX - (this.orgX - this.x) * progress;
		this.sprite.position.y = this.orgY - (this.orgY - this.y) * progress;
		
		return !end;
	}
}

Pixel.MoveAction.prototype = Pixel.Action;