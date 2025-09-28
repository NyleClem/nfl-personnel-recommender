// backend/db.js
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  host: "db", // matches service name in docker-compose
  user: "postgres",
  password: "postgres",
  database: "nfl",
  port: 5432,
});

export default pool;
