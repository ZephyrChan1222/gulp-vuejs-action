class Car {
	constructor(name) {
		this.name = name;
	}
	printName() {
		alert(this.name);
	}
}

var c = new Car('奥迪');
c.printName();