const div = document.querySelector(".test-div");
const form = document.createElement("form");
const textInput = document.createElement("input");
textInput.type = "text";
textInput.name = "god-text";
const button = document.createElement("button");
button.type = "submit";
button.name = "god-submit";

form.append(textInput, button);

div.append(form);
console.dir(form);
console.dir(form.elements);
