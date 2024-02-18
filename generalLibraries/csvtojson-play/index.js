import csv from "csvtojson";

const jsondata = await csv().fromFile("sellerMarketplace.csv");

const mappedData = jsondata.map((data) => {
  data.code = data.code.toLowerCase();
  return data;
});

console.log(jsondata);
