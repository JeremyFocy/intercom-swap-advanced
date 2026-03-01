const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// serve folder web
app.use(express.static(path.join(__dirname, "web")));

app.listen(PORT, () => {
  console.log(`🌐 Web running at http://localhost:${PORT}`);
});