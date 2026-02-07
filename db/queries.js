import { pool } from "./pool.js";

async function insertPostInfo(postInfo) {
  const { user, post } = postInfo;
  await pool.query(`INSERT INTO userPost (username, content) VALUES ($1, $2)`, [user, post]);
}

async function getPostInfo() {
  const { rows } = await pool.query(`SELECT * FROM userPost`);
  return rows
}

export { insertPostInfo, getPostInfo }