// import * as x from "xml2json";
import * as convert from "xml-js";
import fs from "fs";

fs.readFile("./DataDump-04-01-2024.xml", function (err, data) {
  const json = convert.xml2json(data, { compact: true, spaces: 4 });
  fs.writeFile("./DataDump.json", json, "utf8", (err) => {
    if (err) {
      console.error("Error writing to the file:", err);
      return;
    }
  });
});

// x.toJson();
