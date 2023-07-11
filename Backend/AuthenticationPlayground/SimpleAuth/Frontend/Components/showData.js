function showData(data, root) {
  root.innerHTML = "";
  const showData = document.createElement("div");
  const dataHeader = document.createElement("h1");
  dataHeader.textContent = "Your Data is " + data;
  const logOutBtn = document.createElement("button");

  logOutBtn.showData.append(dataHeader, logOutBtn);
  root.append(showData);
}
