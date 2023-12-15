class Dog {
  constructor() {
    this.name = "simba";
  }
  bark() {
    console.log("bhow bhow");
  }
}
class Animal {
  constructor() {
    Object.assign(this, new Dog());
  }
}
const ann = new Animal();
// ann.bark();

console.log();
