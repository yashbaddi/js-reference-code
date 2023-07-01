function createSVGElement(
  elementName,
  classArray = [],
  childNodesArray = [],
  attributes = {}
) {
  const element = document.createElementNS(
    "http://www.w3.org/2000/svg",
    elementName
  );
  assignNonStandard(element, attributes);
  element.classList.add(...classArray);
  element.append(...childNodesArray);
  return element;
}

function assignNonStandard(element, obj) {
  for (const [key, value] of Object.entries(obj)) {
    element.setAttribute(key, value);
  }
}

const svg = document.getElementById("svg");
const bar = createSVGElement("rect", ["bar"], [], {
  y: 50,
  width: 100,
  height: 100,
});
// bar.x = "50";
bar.setAttribute("x", "50px");
// bar.setAttribute("y", "50");
// bar.setAttribute("width", "100");
// bar.setAttribute("height", "100");
const ball = createSVGElement("rect", ["ball"]);

svg.append(bar, ball);
