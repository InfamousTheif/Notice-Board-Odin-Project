import { Client } from "pg";

const SQL = `
 CREATE TABLE IF NOT EXISTS userPost (
  msgId INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY ,
  username VARCHAR(15),
  post VARCHAR(300)
);

INSERT INTO userPost (username, post)
VALUES ('Kyle1111111', 'I love cheese'),
		   ('Kyle', 'I love cheese');
 `