function* iter(a, b, c) {
  for (let i = 0; i <= a; i++) {
    yield i;
    yield this;
  }
}
const obj = iter(3);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
