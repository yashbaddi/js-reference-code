class Func {
  #PromiseState = "Pending";
  #newvar = this.#PromiseState.bind(this);
  constructor(a, b) {
    return this.#newvar;
  }
}

console.log(new Func());
