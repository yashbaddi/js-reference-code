const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

const elem = document.getElementById("moutainTable");
console.log(elem);

MOUNTAINS.forEach((data) => appendData(data));

function appendData(params) {
  const rowData = document.createElement("tr");
  Object.values(params).forEach((element) => {
    const textElem = document.createTextNode(element);
    console.log(textElem.style);
    rowData.insertCell(0).append(textElem);
  });
  elem.append(rowData);

  //To right align the middle column
  const dataTextElements = document.getElementsByTagName("td");
  for (let i = 1; i < dataTextElements.length; i += 3) {
    dataTextElements.item(i).style.textAlign = "right";
  }
}
