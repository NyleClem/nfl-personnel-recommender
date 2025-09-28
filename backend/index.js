import express from "express";
import cors from "cors";
import pkg from "pg";

const { Pool } = pkg;

// Create DB pool (connects to db service inside docker-compose)
const pool = new Pool({
  host: "db", // docker service name, not localhost
  user: "postgres",
  password: "postgres",
  database: "nfl",
  port: 5432,
});

const app = express();
app.use(express.json());

// Allow frontend (Vite on 5173) to make requests during dev
app.use(cors({ origin: "http://localhost:5173" }));

// ✅ Health check (API only)
app.get("/health", (_req, res) => {
  res.json({ status: "ok", message: "Backend is alive 🚀" });
});

// ✅ Database connectivity check
app.get("/db-check", async (_req, res) => {
  try {
    const r = await pool.query("SELECT NOW()");
    res.json({ db: "up", now: r.rows[0] });
  } catch (err) {
    console.error("DB error:", err.message);
    res.status(500).json({ db: "down", error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0"; // important for Docker
app.listen(PORT, HOST, () =>
  console.log(`API listening on http://${HOST}:${PORT}`)
);
