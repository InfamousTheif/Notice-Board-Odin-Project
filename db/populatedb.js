import { Client } from "pg";

const SQL = `
 CREATE TABLE IF NOT EXISTS userPost (
  msgId INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY ,
  username VARCHAR(15) NOT NULL CHECK (LENGTH(TRIM(username)) > 0),
  content VARCHAR(300) NOT NULL CHECK (LENGTH(TRIM(content)) > 0)
);

INSERT INTO userPost (username, content)
VALUES ('Kyle1111111', 'I love cheese'),
		   ('Kyle', 'I love cheese');
 `

async function populateDB() {
  console.log("seeding...")

  const client = new Client({
    connectionString: process.argv[2]
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("Done");
  } catch(err) {
    console.log(`Seeding error: ${err}`)
  } finally {
    await client.end();
  }
}

populateDB()