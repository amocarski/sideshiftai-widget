import { useTokenBalances } from "@/hooks/use-token-balances";
import { useWalletStore } from "@/store/wallet-store";
import { Coin } from "@/types";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import SectionName from "../coin-list/section-name";
import { Switch } from "../ui/switch";
import WalletButton from "./wallet-button";

const Wallet = ({ coins }: { coins: Coin[] }) => {
  const { address, isConnected } = useAccount();
  const { balances, isLoading, getBalances } = useTokenBalances(coins, address);
  const {
    showWalletCoins,
    setShowWalletCoins,
    setBalances,
    setIsLoadingBalances,
  } = useWalletStore();

  const handleSwitch = (checked: boolean) => {
    if (checked) {
      getBalances();
    } else {
      setBalances([]);
    }
    setShowWalletCoins(checked);
  };

  useEffect(() => {
    if (balances && showWalletCoins) {
      setBalances(balances);
    }
  }, [balances, showWalletCoins]);

  useEffect(() => {
    setIsLoadingBalances(isLoading);
  }, [isLoading]);

  return (
    <div>
      <SectionName name="Wallet" />
      {isConnected && address ? (
        <div className="my-5 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <span className="font-text text-sm">Show wallet coins</span>
            <Switch
              disabled={isLoading}
              checked={showWalletCoins}
              onCheckedChange={handleSwitch}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-text text-sm">Disconnect</span>
            <WalletButton disconnect />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <WalletButton />
        </div>
      )}
    </div>
  );
};

export default Wallet;
