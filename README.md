# Wagmi Protocol Connectors (Logic Layer)

This repository provides the "Nervous System" for the Master Dashboard. While the UI components provide the look, these hooks provide the life. They handle the complex asynchronous states of blockchain interaction—loading, success, error, and pending—ensuring the dashboard remains responsive while interacting with your 100-repo library.

## Core Features
* **Type-Safe Contract Reads:** Direct mapping of ABIs to TypeScript types for error-free data fetching.
* **Reactive Event Listeners:** Real-time UI updates when an Escrow is released or a Dark Pool trade is settled.
* **Multichain Provider Logic:** Seamlessly handles data fetching across Base, Arbitrum, and Ethereum without manual switching.
* **Flat Architecture:** Hook logic, ABI constants, and provider configurations all reside in the root directory.



## Setup
1. `npm install`
2. Update `constants.js` with your deployed contract addresses.
3. Wrap your application in the `ProtocolProvider`.
