const express = require("express");
const { getPrice } = require("./price");

const app = express();

app.use(express.static("web"));

app.get("/swap", async (req, res) => {

  const { from, to, amount } = req.query;

  const priceFrom = await getPrice(from.toUpperCase());
  const priceTo = await getPrice(to.toUpperCase());

  const result = (amount * priceFrom) / priceTo;

  res.json({
    result: result
  });

});

app.listen(3000, () => {
  console.log("Web running on http://localhost:3000");
});
