import { http, createConfig } from 'wagmi';
import { mainnet, base, arbitrum } from 'wagmi/chains';

/**
 * @dev Global multichain configuration for the Alex000115 ecosystem.
 */
export const config = createConfig({
  chains: [mainnet, base, arbitrum],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
    [arbitrum.id]: http(),
  },
});
