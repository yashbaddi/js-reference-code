class Car {
  static carCount = 0;
  constructor(color, model) {
    this.color = color;
    this.model = model;
    this.speed = 0;
    Car.carCount += 1;
  }

  brake() {
    this.speed = 0;
  }

  accelerate(targetSpeed) {
    this.speed += targetSpeed;
  }

  static countCars() {
    return Car.carCount;
  }
}

class Porsche extends Car {
  constructor(color) {
    super(color, "porsche");
  }
}

function carFactory(color, model) {
  let speed = 0;
  carFactory.carCount += 1;

  return {
    accelerate: function (targetSpeed) {
      this.speed += targetSpeed;
    },
    color: color,
    model: model,
    speed: speed,
  };
}
carFactory.carCount = 0;
carFactory.countCars = function countCars() {
  return this.carCount;
};

function porscheFactory(color) {
  const newObj = Object.create(carFactory(color, "porsche"));
  Object.assign(newObj, carFactory.prototype);
  return newObj;
}

Object.setPrototypeOf(porscheFactory, carFactory);

const gar = new Car("yellow", "lamborghini");
gar.accelerate(16);
console.log("gar", gar);

const par = new Porsche("red");
console.log("par", par);
console.log("carCounts", Porsche.countCars());
console.log(par.hasOwnProperty("model"));

const batMobile = carFactory("black", "tank");

batMobile.accelerate(6);
console.log("countCars", carFactory.countCars());
console.log("batMobile", batMobile);

const nineEleven = porscheFactory("red");
nineEleven.accelerate(911);
console.log("nineEleven", nineEleven);
console.log("carCounts", porscheFactory.countCars());
console.log(nineEleven.hasOwnProperty("model"));
