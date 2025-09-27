import express from "express";

const app = express();
const PORT = 3000;

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is alive 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
