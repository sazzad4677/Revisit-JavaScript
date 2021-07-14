class Person {
  // Parent Class
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  play() {
    console.log(`${this.name} is playing`);
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
    super.play();
    console.log(`${this.name} is playing cricket`);
  }
}

let sakib = new Cricketer("Sakib", 40, "All Rounder", "Bangladesh");
console.log(sakib.name); //Sakib

sakib.play(); //Sakib is playing cricket
