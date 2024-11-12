import { create } from "zustand";
import { Coin } from "@/types";
import { getUniqueNetworks } from "@/lib/utils";

type CoinsState = {
  coins: Coin[];
  networks: string[];
  selectedNetworks: string[];
  setNetworks: (coins: Coin[]) => void;
  setSelectedNetworks: (
    selectedNetworks: string[] | ((prev: string[]) => string[])
  ) => void;
};

export const useCoinsStore = create<CoinsState>()((set) => ({
  coins: [],
  networks: [],
  selectedNetworks: [],
  setNetworks: (coins) =>
    set(() => ({
      networks: getUniqueNetworks(coins),
    })),
  setSelectedNetworks: (selectedNetworks) =>
    set((state) => ({
      selectedNetworks:
        typeof selectedNetworks === "function"
          ? selectedNetworks(state.selectedNetworks)
          : selectedNetworks,
    })),
}));
