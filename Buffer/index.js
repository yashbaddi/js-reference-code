const buf = Buffer.alloc(10);

console.log("Buffer is", buf);

buf.write("{hey:5}");
console.log(buf);
buf.write("hel");
console.log(buf);
console.log(buf.subarray(0, 3));
