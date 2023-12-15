// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   eat() {
//     console.log("eat" + this.name);
//   }
// }
class Dog {}

function Animal(name) {
  this.name = name;
}
Animal.prototype.eat = function () {
  console.log("eat," + this.name);
};

const obj = new Animal("Simba");
obj.eat();
