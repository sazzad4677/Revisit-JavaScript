class Person {
  // Parent Class
  constructor(name, age) {
    this.name = name; // property
    this.age = age;
  }
  eat() {
    //method
    console.log(`${this.name} is eating`);
  }
  static isEqualAge(cricketer1, cricketer2) {
    return cricketer1.age === cricketer2.age;
  }
}

let sakib = new Person("Sakib", 40);
let tamim = new Person("Tamim", 40);
console.log(Person.isEqualAge(sakib, tamim))// true