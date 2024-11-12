"use client";
import { getFilteredNetworks, getWalletCoins } from "@/lib/utils";
import { useCoinsStore } from "@/store/coins-store";
import { useWalletStore } from "@/store/wallet-store";
import { Coin } from "@/types";
import { Settings2 } from "lucide-react";
import { useState } from "react";
import Filters from "../flters";
import { Button } from "../ui/button";
import { Drawer } from "../ui/drawer";
import { Input } from "../ui/input";
import Loading from "./loading";
import NoResults from "./no-results";
import Row from "./row";
import SectionName from "./section-name";

type ListProps = {
  coins: Coin[] | [];
};

const List = ({ coins }: ListProps) => {
  const [search, setSearch] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { selectedNetworks } = useCoinsStore();
  const { showWalletCoins, balances, isLoadingBalances } = useWalletStore();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) => {
    const matchesSearch =
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.networks.some((network) =>
        network.toLowerCase().includes(search.toLowerCase())
      );

    const matchesNetworks =
      selectedNetworks.length === 0 ||
      coin.networks.some((network) => selectedNetworks.includes(network));

    return matchesSearch && matchesNetworks;
  });

  return (
    <>
      <div className="relative flex flex-row gap-6">
        <Input
          className="w-full"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
        />
        <Button
          className="h-full px-7"
          variant="outline"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Settings2 className="!size-6" />
        </Button>
      </div>

      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        className="w-[250px] p-6 pr-0 pt-0"
        title="Filters"
      >
        <Filters coins={coins} />
      </Drawer>

      {showWalletCoins && (
        <div className="mt-8 max-h-full flex-1 overflow-y-auto overflow-x-hidden pb-8 sm:h-[25rem]">
          {isLoadingBalances && <Loading />}
          {getWalletCoins(filteredCoins, balances).length === 0 &&
            !isLoadingBalances && <NoResults />}
          {getWalletCoins(filteredCoins, balances).length > 0 &&
            !isLoadingBalances && (
              <>
                <SectionName name="Wallet" />
                {getWalletCoins(filteredCoins, balances).map((coin: Coin) =>
                  getFilteredNetworks(coin, true, search, selectedNetworks).map(
                    (network: string) => (
                      <Row
                        key={`${coin.name}-${network}`}
                        {...coin}
                        network={network}
                        coins={coins}
                        value={
                          balances.find(
                            (balance) => balance.symbol === coin.coin
                          )?.formatted
                        }
                      />
                    )
                  )
                )}
              </>
            )}
        </div>
      )}

      {!showWalletCoins && (
        <div className="mt-8 max-h-full flex-1 overflow-y-auto overflow-x-hidden pb-8 sm:h-[25rem]">
          {filteredCoins.length === 0 && <NoResults />}
          {filteredCoins.length > 0 && (
            <>
              <SectionName name="DEFI" />
              {filteredCoins.map((coin: Coin) =>
                getFilteredNetworks(coin, false, search, selectedNetworks).map(
                  (network: string) => (
                    <Row
                      key={`${coin.name}-${network}`}
                      {...coin}
                      network={network}
                      coins={coins}
                    />
                  )
                )
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default List;
