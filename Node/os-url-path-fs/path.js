import path from "path";

export function pathResolver() {
  return path.resolve();
}

console.log(path.join("/foo", "./bar"));
console.log(path.extname("/users/types.txt").length);
