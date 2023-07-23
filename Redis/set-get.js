import client from "./db-connection.js";

await client.set("hey", "hello yash");

console.log(await client.get("hey"));

await client.json.set("jas", "hello yash");

console.log(await client.get("hey"));
