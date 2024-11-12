import { Coin } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const resolveIconPath = (coins: Coin[], network: string) => {
  const networkDetails = findNewtworkDetails(coins, network);

  if (networkDetails) {
    return `/coin-icons/${networkDetails?.coin.toLowerCase()}.svg`;
  } else {
    return `/coin-icons/${network.toLowerCase()}.svg`;
  }
};

// onlyEthereum switch to simplify the logic for this demo example
export const getFilteredNetworks = (
  coin: Coin,
  onlyEthereum: boolean = false,
  search: string,
  selectedNetworks: string[]
) => {
  if (onlyEthereum) {
    return coin.networks.includes("ethereum") ? ["ethereum"] : [];
  }

  return coin.networks.filter((network) => {
    const matchesSearch = search
      ? network.toLowerCase().includes(search.toLowerCase()) ||
        coin.name.toLowerCase().includes(search.toLowerCase())
      : true;

    const matchesSelectedNetworks =
      selectedNetworks.length === 0 || selectedNetworks.includes(network);

    return matchesSearch && matchesSelectedNetworks;
  });
};

export const getWalletCoins = (
  filteredCoins: Coin[],
  balances: any[]
): Coin[] => {
  return filteredCoins.filter(
    (coin) =>
      balances.some(
        (balance) =>
          balance.symbol === coin.coin && coin.networks.includes("ethereum")
      ) && coin.networks.includes("ethereum")
  );
};

export const getUniqueNetworks = (coins: Coin[]): string[] => {
  const uniqueNetworks = Array.from(
    new Set(coins.flatMap((coin) => coin.networks))
  ).sort();

  return uniqueNetworks;
};

export const findNewtworkDetails = (
  coins: Coin[],
  network: string
): Coin | undefined => {
  return coins.find((coin) => coin.mainnet === network);
};
