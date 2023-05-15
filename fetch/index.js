const fetchUrl = fetch("data.txt", { mode: "no-cors" });
fetchUrl.then((res) => {
  console.log(res);
});
