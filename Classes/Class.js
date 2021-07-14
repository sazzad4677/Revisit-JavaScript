class Person {
  // Parent Class
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Cricketer extends Person {
  // Sub class
  constructor(name, age, type, country) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
  }

  play() {
    console.log(`${this.name} is playing`);
  }
}

Person.prototype = {
  eat: function () {
    console.log(`${this.name} is eating`);
  },
};

let sakib = new Cricketer("Sakib", 40, "All Rounder", "Bangladesh");
console.log(sakib.name); //Sakib

sakib.eat(); //Sakib is eating


