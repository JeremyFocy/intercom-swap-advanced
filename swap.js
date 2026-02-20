const { getPrice } = require("./price");
const { saveHistory } = require("./history");

async function swap(from, to, amount) {

  const priceFrom = await getPrice(from);
  const priceTo = await getPrice(to);

  if (!priceFrom || !priceTo) {
    console.log("Token not supported");
    return;
  }

  const usdValue = amount * priceFrom;
  const result = usdValue / priceTo;

  console.log(`Result: ${result} ${to}`);

  saveHistory({
    from,
    to,
    amount,
    result,
    time: new Date()
  });

}

module.exports = { swap };
