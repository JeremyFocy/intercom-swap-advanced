const fs = require("fs");

function saveHistory(data) {

  let history = [];

  if (fs.existsSync("swap-history.json")) {
    history = JSON.parse(fs.readFileSync("swap-history.json"));
  }

  history.push(data);

  fs.writeFileSync("swap-history.json", JSON.stringify(history, null, 2));
}

function viewHistory() {

  if (!fs.existsSync("swap-history.json")) {
    console.log("No history");
    return;
  }

  const history = JSON.parse(fs.readFileSync("swap-history.json"));

  console.log(history);
}

module.exports = {
  saveHistory,
  viewHistory
};
