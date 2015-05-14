// class level inheritance is not prototype inheritance

function Automobile(topSpeed, turnRadius){
	this.topSpeed = topSpeed || 100;
	this.turnRadius = turnRadius || 20;
	this.brake = function(){
		console.log('slowing down to stop');
	};
	this.accelerate = function(){
		console.log('accelerating to a top speed of ' + this.topSpeed)
	};
}

var car = new Automobile(120)

car.skid = function(){
	car.brake();
}

console.log(car.topSpeed)
car.skid();


