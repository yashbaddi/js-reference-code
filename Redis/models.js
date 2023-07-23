import client from "./db-connection.js";

async function readDB() {
  return await client.get("example");
}

async function insertDB(data) {
  return await client.set("example", data);
}

async function updateDB() {
  return await client.set;
}
async function deleteDB() {}
