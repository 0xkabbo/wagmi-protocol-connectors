/**
 * @dev Centralized registry for all 100 protocol addresses.
 * Clean, flat architecture for easy mapping.
 */
export const CONTRACT_ADDRESSES = {
  ESCROW: "0x...",
  DARK_POOL: "0x...",
  IDENTITY: "0x...",
  DEX_AGGREGATOR: "0x...",
  STAKING_POOL: "0x..."
};

export const ESCROW_ABI = [
  "function jobs(uint256) view returns (address, address, uint256, uint256, uint8)",
  "function jobCount() view returns (uint256)",
  "event FundsReleased(uint256 indexed id, uint256 amount)"
];
