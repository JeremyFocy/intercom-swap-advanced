```markdown
# IntercomSwap Advanced Skill

This fork provides extended skills for agents interacting with IntercomSwap.

## Capabilities

Agent can perform the following actions:

### 1. Token Price Lookup

Retrieve real-time cryptocurrency prices using CoinGecko API.

Supported tokens:

- ETH
- BTC
- SOL
- USDT

Fallback pricing ensures reliability if API limits occur.

---

### 2. Swap Simulation

Agent can simulate swaps between supported tokens.

Example:

Input:
SOL → ETH
Amount: 1

Output:
0.05 ETH

Swap results are calculated using real market price.

---

### 3. Wallet Viewer

Agent can display wallet balances (simulation).

Example:

Wallet address:
0x123...

Output:
ETH: 1.5
USDT: 500
SOL: 10

---

### 4. Transaction History

Agent can view previous swap history.

Stored in:

swap-history.json

Includes:

- token pair
- amount
- result
- timestamp

---

### 5. Web Interface Interaction

Agent can interact through Web UI.

Run:

```bash
node server.js
Access:

http://localhost:3000
6. CLI Interaction
Agent can use CLI interface.

Run:

node cli.js
Menu options:

Price lookup

Swap simulation

Wallet viewer

History viewer

Reliability Features
API fallback system

Cached pricing

Error handling

Persistent transaction logging

Purpose
This skill enhances IntercomSwap functionality by enabling agents to:

simulate swaps

retrieve prices

track transactions

interact via CLI and Web