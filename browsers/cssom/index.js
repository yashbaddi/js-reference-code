const app = document.getElementById("app");
console.log(app);

const circle = document.createElement("div");
const button = document.createElement("button");
button.addEventListener("click", () => {
  console.log("clicked");
});

circle.classList.add("circle");

app.append(circle);
app.append(button);

// setInterval(() => {
//   const computed = window.getComputedStyle(circle);
//   circle.style.width = parseInt(computed.width) + 1 + "px";
// }, 20);
