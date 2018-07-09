class Car{
	name:string;
	acceleration:number;
	constructor(name:string){
		this.name=name;
		this.acceleration=0;
	}
	honk(){
		console.log('${this.name} is saying: Tooooooooot!');
	}
	acceleration(speed:number){
	this.acceleration=this.acceleration + speed;
	}
}
let car=new Car("BMW");
car.honk();
console.log(car.acceleration);
car.acceleration(60);
console.log(car.acceleration);