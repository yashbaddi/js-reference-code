import * as fs from "fs";
import * as path from "path";

export function readJsonFiles(directoryPath) {
  const jsonFiles = fs
    .readdirSync(directoryPath)
    .filter((file) => file.endsWith(".json"));
  const jsonCardData = {};
  const jsonFile = "3157189.json";
  //   jsonFiles.forEach((jsonFile) => {
  const filePath = path.join(directoryPath, jsonFile);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const jsonData = JSON.parse(fileContent);
  const id = Number(jsonFile.slice(0, -5));
  jsonCardData[id] = jsonData.details;
  //   });
  return jsonCardData;
}

const DirJsonPath = "/Users/yashbaddi/Downloads/articles-dump-dinamani/livenow";
const jsonCardData = readJsonFiles(DirJsonPath);
console.log(jsonCardData);
