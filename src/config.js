const fs = require("fs");

let config = {};

try {
  config = JSON.parse(
    fs.readFileSync("./config/default.json")
  );
} catch (e) {
  console.error("Config load error:", e);
}

module.exports = config;