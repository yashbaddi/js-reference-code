//Null Parser
function nullParser(input) {
  if (!input.startsWith("null")) return null;
  return [null, input.slice(4)];
}
//Boolean Parser
function booleanParser(input) {
  if (input.startsWith("true")) return [true, input.slice(4)];
  if (input.startsWith("false")) return [false, input.slice(5)];
  return null;
}

//Number Parser
function numberParser(input) {
  let re = /^-?([1-9](\d)*|0)(\.(\d)+)?([eE][+-]?(\d)+)?/;
  let n = input.match(re);
  // console.log(n)
  if (!n) return null;
  return [Number(n[0]), input.slice(n[0].length)];
}
//String Parser
function StringParser(input) {
  // console.log(input)
  input = input.trim();
  let a = new Set(['"', "\\", "/", "b", "f", "n", "r", "t", "u"]);
  if (!input.startsWith('"')) return null;
  let i = 1;
  while (input[i] != '"') {
    if (input.charCodeAt(i) === 9 || input.charCodeAt(i) === 10) return null;
    if (input[i] == "\\") {
      if (!a.has(input[i + 1])) return null;
      i++;
    }
    i++;
  }
  return [input.slice(1, i), input.slice(i + 1)];
}

//Value Switch
function valueSelect(input) {
  input = input.trim();
  return (
    nullParser(input) ||
    booleanParser(input) ||
    numberParser(input) ||
    StringParser(input) ||
    arrayParser(input) ||
    objectParser(input)
  );
}

//Array Parser
function arrayParser(input) {
  let rem = input.trim();
  let arr = [];
  let val;
  if (!input.startsWith("[")) return null;
  while (!(rem[0] == "]")) {
    rem = rem.slice(1).trim();
    if (rem[0] == "]") break;
    val = valueSelect(rem);
    if (!val) return null;
    rem = val[1].trim();
    arr.push(val[0]); //Push that value shit in the array
    if (rem[0] !== "," && rem[0] !== "]") return null; //fail22
    if (rem[0] === "," && rem[1] === "]") return null; //fail4
  }
  return [arr, rem.slice(1)];
}

//Object Parser
function objectParser(input) {
  input = input.trim();
  let rem = input;
  let obj = {};
  let key, val;
  // console.log(rem[1])
  if (!/^{/.test(rem)) return null;
  while (!(rem[0] == "}")) {
    rem = rem.slice(1).trim();
    if (rem[0] == "}") break;
    key = StringParser(rem);
    if (!key) return null;
    rem = key[1].trim();
    if (rem[0] != ":") return null;
    val = valueSelect(rem.slice(1));
    if (!val) return null;
    rem = val[1].trim();
    rem = rem.trim();
    obj[key[0]] = val[0];
    if (rem[0] === "," && rem[1] === "}") return null; //fail9
  }
  // console.log("input:",input)
  // console.log('rem:',rem)
  return [obj, rem.slice(1)];
  // return obj
}

// console.log(arrayParser('[1,2,3,4,5,6,7,8,69,"fffff"]'));

// console.log(objectParser('{"imped":34,"modiji":true},this is also a obje'));

// console.log(StringParser('"this is \"sparta \t hokage Omewa \" Mo sindeiru \u123f jutsu"well then i am god'));

// console.log(JSON.parse('"this is \" sparta \t hokage Omewa\" Mo sindeiru \u123f jutsu"'))

// console.log(numberParser('edc123'))

// JSONParser('{"hey":[1,2,3,4]}')
// StringParser("superduper")
// console.log(numberParser('2322asdf'))

function JSONParser(input) {
  // input = input.trim()
  // console.log("json Input;",input)
  const parsedValue = arrayParser(input) || objectParser(input);

  if (parsedValue === null || parsedValue[1] !== "") {
    return "Not a valid JSON input";
  } //sec condition is for test case 7 and 8
  // console.log('Parsed:')
  // if((parsedValue[1])){return 'Not a JSON'}    //see fail 7 and 8 for reason of inserting this line
  return parsedValue[0];
}

console.log(JSONParser('"OC Maymay \ud83e \udd2a"'));

// const fs = require("fs");
// const { json } = require("stream/consumers");
// // fail cases
// for (let i = 1; i <= 33; i++) {
//   if (i !== 18) {
//     const data = fs.readFileSync(`./test/fail${i}.json`, "utf8");
//     console.log(`fail${i}:`, JSONParser(data));
//   }
// }

// // pass cases
// for (let i = 1; i <= 5; i++) {
//   const data = fs.readFileSync(`./test/pass${i}.json`, "utf8");
//   console.log(`pass${i}:`, JSONParser(data));
// }

// console.log(numberParser('12e'))
// console.log(arrayParser('[[[[[[[[[[[[[[[[[[["Not too deep"]]]]]]]]]]]]]]]]]]]'))
// const data = fs.readFileSync(`./test/pass4.json`, 'utf8')
// console.log(`pass`, JSONParser(data))

// let a=JSON.stringify({"google":"My war \n and hokage"})
// console.log(JSON.stringify({"google":"My war \n and hokage"}))
// console.log(`pass`, JSONParser(a))
