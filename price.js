const axios = require("axios");

// fallback prices (backup)
const fallbackPrices = {
  ETH: 3000,
  BTC: 60000,
  SOL: 150,
  USDT: 1
};

// cache
let cache = {};
let lastFetch = 0;

async function getPrice(token) {

  token = token.toUpperCase();

  // use cache if less than 30 seconds old
  if (cache[token] && Date.now() - lastFetch < 30000) {
    return cache[token];
  }

  const map = {
    ETH: "ethereum",
    BTC: "bitcoin",
    SOL: "solana",
    USDT: "tether"
  };

  const id = map[token];

  if (!id) {
    return fallbackPrices[token] || null;
  }

  try {

    const url =
      `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`;

    const response = await axios.get(url);

    const price = response.data[id].usd;

    // save cache
    cache[token] = price;
    lastFetch = Date.now();

    return price;

  } catch (error) {

    console.log("Using fallback price for", token);

    return fallbackPrices[token] || null;

  }
}

module.exports = { getPrice };
