import { useReadContract, useWatchContractEvent } from 'wagmi';
import { CONTRACT_ADDRESSES, ESCROW_ABI } from './constants';

/**
 * @dev Expert-level hook for managing Escrow state (Repo 81).
 */
export function useEscrowStatus(jobId) {
  const { data, isLoading, refetch } = useReadContract({
    address: CONTRACT_ADDRESSES.ESCROW,
    abi: ESCROW_ABI,
    functionName: 'jobs',
    args: [BigInt(jobId)],
  });

  // Automatically refresh UI when funds are released
  useWatchContractEvent({
    address: CONTRACT_ADDRESSES.ESCROW,
    abi: ESCROW_ABI,
    eventName: 'FundsReleased',
    onLogs() {
      console.log('New event detected! Refetching escrow status...');
      refetch();
    },
  });

  if (!data) return { isLoading };

  return {
    client: data[0],
    freelancer: data[1],
    totalAmount: data[2],
    releasedAmount: data[3],
    state: data[4],
    isLoading
  };
}
