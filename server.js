const express = require("express");
const os = require("os");

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/api/info", (req, res) => {
  res.status(200).json({ uptime: os.uptime(), nodeVersion: process.version });
});

app.listen(port, () => {
  console.log(`Health server listening on port ${port}`);
});
