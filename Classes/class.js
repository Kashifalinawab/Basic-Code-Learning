

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getGreet() {
        return " Hello Viewer from " + this.name
    }
}

class Students extends Person {
    constructor(name, age, rollNo) {
        super(name, age);
        this.rollNo = rollNo
    }
}

class Employees extends Person {
    constructor(name, age, company) {
        super(name, age)
        this.company = company;
    }
}

let student1 = new Students("Ram", 20, 1123);
let student2 = new Students("Sam Shrma", 21, 1144);
let stundent3 = new Students("Johan Stan", 23, 1155);



let worker1 = new Employees("Kiran", 30, "TVS");
let worker2 = new Employees("Rahul", 32, "Bajaj");
let worker3 = new Employees("Vikas", 35, "HONDA")








