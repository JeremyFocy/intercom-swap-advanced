const readline = require("readline-sync");

const { swap } = require("./swap");
const { viewWallet } = require("./wallet");
const { viewHistory } = require("./history");
const { getPrice } = require("./price");

async function menu() {

  while (true) {

    console.log("\n=== IntercomSwap Advanced ===");

    console.log("1. Check Price");
    console.log("2. Swap Token");
    console.log("3. View Wallet");
    console.log("4. History");
    console.log("5. Exit");

    const choice = readline.question("Choose: ");

    if (choice == 1) {

      const token = readline.question("Token: ");
      const price = await getPrice(token.toUpperCase());
      console.log("Price:", price);

    }

    if (choice == 2) {

      const from = readline.question("From: ");
      const to = readline.question("To: ");
      const amount = readline.question("Amount: ");

      await swap(from.toUpperCase(), to.toUpperCase(), amount);

    }

    if (choice == 3) {

      const address = readline.question("Wallet address: ");
      viewWallet(address);

    }

    if (choice == 4) {

      viewHistory();

    }

    if (choice == 5) {
      break;
    }

  }

}

menu();
