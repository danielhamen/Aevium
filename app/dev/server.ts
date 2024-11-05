// server.js
import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 9000;

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, "build")));

// Catch-all route to serve index.html for client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Catch-all route to serve index.html for client-side routing
app.post("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
