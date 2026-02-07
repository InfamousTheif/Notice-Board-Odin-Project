import { Pool } from "pg";
import "../utils/dotenvHandler.js"

// const pool = new Pool({
//   host: process.env.PGHOST,
//   user: process.env.PGUSER,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   port: process.env.PGPORT
// })

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

export { pool }