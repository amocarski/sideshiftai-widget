import { useCoinsStore } from "@/store/coins-store";
import { Coin } from "@/types";
import { useEffect } from "react";
import Networks from "./networks";
import Wallet from "./wallet";

const Filters = ({ coins }: { coins: Coin[] }) => {
  const { setNetworks, networks } = useCoinsStore();

  useEffect(() => {
    setNetworks(coins);
  }, [coins]);

  return (
    <div className="max-h-full overflow-y-auto pt-5">
      <Wallet coins={coins} />
      <Networks networks={networks} coins={coins} />
    </div>
  );
};

export default Filters;
