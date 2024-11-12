import { create } from "zustand";

type WalletState = {
  showWalletCoins: boolean;
  isLoadingBalances: boolean;
  balances: any[];
  setShowWalletCoins: (show: boolean) => void;
  setIsLoadingBalances: (isLoading: boolean) => void;
  setBalances: (balances: any[]) => void;
};

export const useWalletStore = create<WalletState>((set) => ({
  showWalletCoins: false,
  isLoadingBalances: false,
  balances: [],
  setShowWalletCoins: (show) => set({ showWalletCoins: show }),
  setIsLoadingBalances: (isLoading) => set({ isLoadingBalances: isLoading }),
  setBalances: (balances) => set({ balances }),
}));
