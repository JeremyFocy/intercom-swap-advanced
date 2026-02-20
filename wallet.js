function viewWallet(address) {

  const fakeBalances = {
    ETH: 1.5,
    BTC: 0.25,
    USDT: 500,
    SOL: 10
  };

  console.log("Wallet:", address);
  console.log(fakeBalances);
}

module.exports = { viewWallet };
