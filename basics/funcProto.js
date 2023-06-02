function hey() {
  this.cry = 3;
  return { cry: this.cry, hell: this.hell };
}

const obj = {
  hell: 5,
  cry: 7,
};

const fn = hey.bind(obj);

console.log(fn());
