class Person{
	private _firstName:string;
	constructor(){
		this._firstName=null;
	}
	get firstName(){
		return this._firstName;
	}
	set firstName(value:string){
		this._firstName=value.toUpperCase();
	}
}
let person=new Person();
person.firstName="Assad";
console.log(person.firstName);