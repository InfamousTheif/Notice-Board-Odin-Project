import { Client } from "pg";

const SQL = `
 CREATE TABLE IF NOT EXISTS userPost (
  msgId INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY ,
  username VARCHAR(15) NOT NULL CHECK (LENGTH(TRIM(username)) > 0),
  content VARCHAR(300) NOT NULL CHECK (LENGTH(TRIM(content)) > 0),
  created_at TIMESTAMPTZ DEFAULT now()
);

INSERT INTO userPost (username, content)
VALUES ('Inq', 'I hate web dev'),
		   ('Inq2', 'I love money');
 `

async function populateDB() {
  console.log("seeding...")

  if (!process.argv[2]) {
    throw new Error("Missing database connection string");
  } 

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