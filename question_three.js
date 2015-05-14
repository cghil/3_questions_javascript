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

var car = new Automobile(120);

car.skid = function(){
	car.brake();
}

var anotherCar = new Automobile;
console.log(anotherCar.topSpeed)
console.log(car.topSpeed)
car.skid();

// prototpye inheirtance

var automobile = {
	topSpeed: 100,
	turnRadius: 20,
	brake: function(){
		console.log('slowing down to stop');
	},
	accelerate: function(){
		console.log('accelerating to a top speed of ' + automobile.topSpeed);
	}

}

automobile.accelerate();
var protoCar = {topSpeed: 120}
protoCar.__proto__ = automobile;
protoCar.skid = function(){
	console.log('skidding');
	protoCar.brake();
}

protoCar.skid();