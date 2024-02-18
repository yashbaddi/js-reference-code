import lodash from "lodash";
import fs from "fs";
import csv from "csvtojson";

// Function to convert XLSX to SQL queries
async function xlsxToSqlQueries(filePath, tableName) {
  // Read the Excel file
  const data = await csv().fromFile(filePath);
  console.log(data);

  //   const workbook = XLSX.readFile(filePath);
  //   const sheetName = workbook.SheetNames[0];
  //   const worksheet = workbook.Sheets[sheetName];

  //   // Get the column headers
  const headers = Object.keys(data[0]).map((head) => lodash.snakeCase(head));

  //   // Extract data from the worksheet
  //   const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  // Generate SQL INSERT queries
  const insertQueries = data
    .map((row) => {
      // const values = row.map((value) =>
      //   typeof value === "string" ? `'${value}'` : value
      // );
      const values = Object.values(row).map((value) =>
        value.replaceAll("'", "''")
      );

      return `(\'${values.join("','")}\'),`;
    })
    .join("\n");

  return `INSERT INTO ${tableName} (${headers.join(
    ", "
  )}) VALUES ${insertQueries}`;
}

// Example usage
const filePath = "Walmart.csv";
const tableName = "sellerx_walmart_product_catalogue";

const sqlQueries = await xlsxToSqlQueries(filePath, tableName);

// Write SQL queries to a file
fs.writeFileSync("output.sql", sqlQueries);

console.log("SQL queries written to output.sql");
