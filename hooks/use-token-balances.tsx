"use client";

import { getTokenBalance } from "@/lib/balance";
import { Coin } from "@/types";
import { useCallback, useState } from "react";

export const useTokenBalances = (
  coins: Coin[],
  address: string | undefined
) => {
  const [tokenBalances, setTokenBalances] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBalances = useCallback(async () => {
    if (!address) return;

    setIsLoading(true);
    const balances: any[] = [];

    try {
      for (const coin of coins) {
        if (coin.tokenDetails) {
          // to support all netowkrs
          // const contractAddresses = Object.values(coin.tokenDetails)
          //   .map((token: any) => token.contractAddress)
          //   .join(",");

          const contractAddress = coin.tokenDetails.ethereum?.contractAddress;

          if (contractAddress) {
            try {
              const res = await getTokenBalance(address, contractAddress);
              if (res.value) {
                balances.push(res);
              }
            } catch (error) {
              console.log("ERROR", error);
            }
          }
        }
      }

      setTokenBalances(balances);
    } finally {
      setIsLoading(false);
    }
  }, [coins, address]);

  return {
    balances: tokenBalances,
    isLoading,
    getBalances: fetchBalances,
  };
};
