class BaseObject{
	width:number;
	length:number;
	constructor(){
		this.width=0;
		this.length=0;
	}
}
class Rectangle extends BaseObject{
	constructor(){
		super();
	}
	calcSize():number{
		return this.width * this.length;
	}
}
let rectangle = new Rectangle();
rectangle.width=5;
rectangle.length=2;
console.log(rectangle.calcSize());
