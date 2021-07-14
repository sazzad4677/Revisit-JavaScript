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

  get setName() {
    //getter
    return this.name;
  }
  set setName(name) {
    //setter
    this.name = name;
  }
}

let sakib = new Person("Sakib", 40);

console.log(sakib.setName); // Sakib

sakib.setName = 'Tamim'
console.log(sakib.name) //Tamim
