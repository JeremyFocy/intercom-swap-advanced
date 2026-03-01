const priceEl = document.getElementById("price");
const resultEl = document.getElementById("result");
const pairSelect = document.getElementById("pairSelect");

let currentPrice = 0;
let currentPair = pairSelect.value;

async function fetchPrice() {
  try {
    const res = await fetch(
      `https://api.binance.com/api/v3/ticker/price?symbol=${currentPair}`
    );

    const data = await res.json();

    currentPrice = parseFloat(data.price);

    priceEl.textContent =
      "$" + currentPrice.toLocaleString("en-US");
  } catch (e) {
    priceEl.textContent = "Price error";
  }
}

// Ganti pair
pairSelect.onchange = () => {
  currentPair = pairSelect.value;
  fetchPrice();
};

// Auto refresh
fetchPrice();
setInterval(fetchPrice, 3000);

// Swap Simulation
document.getElementById("swapBtn").onclick = () => {
  const amount = Number(
    document.getElementById("amount").value
  );

  if (!amount || !currentPrice) return;

  const result = (amount * currentPrice).toFixed(2);

  resultEl.textContent =
    result + " USDT";
};