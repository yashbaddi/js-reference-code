// import mixin from "merge-descriptors";

// const dest = { hello: 1, no: 2 };
// const src = { no: 4, yes: 5 };
// console.log("old dest", dest);
// mixin(dest, src);
// console.log("new dest", dest);
// console.log("src", src);

async function hey() {
  hello(
    await new Promise((res, rej) => {
      res("hey there");
    })
  );
}
hello(await hey());

async function hello(vari) {
  console.log(vari);
}

// hey()
