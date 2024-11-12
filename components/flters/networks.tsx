import { resolveIconPath } from "@/lib/utils";
import { useCoinsStore } from "@/store/coins-store";
import { Coin } from "@/types";
import SectionName from "../coin-list/section-name";

type NetworksProps = {
  networks: string[];
  onChange?: (selectedNetworks: string[]) => void;
  coins: Coin[];
};

const Networks = ({ networks, onChange, coins }: NetworksProps) => {
  const { setSelectedNetworks, selectedNetworks } = useCoinsStore();

  const handleNetworkClick = (network: string) => {
    setSelectedNetworks((prev: string[]) => {
      const newSelection = prev.includes(network)
        ? prev.filter((n: string) => n !== network)
        : [...prev, network];
      onChange?.(newSelection);
      return newSelection;
    });
  };

  return (
    <>
      <SectionName name="Networks" />
      <div className="my-5 flex flex-col gap-2">
        {networks.map((network) => (
          <div
            key={network}
            onClick={() => handleNetworkClick(network)}
            className={`flex items-center gap-3 cursor-pointer py-2 px-4  rounded ${
              selectedNetworks.includes(network)
                ? "bg-pixel-blue text-black"
                : "hover:bg-code-blue"
            }`}
          >
            {network !== "internal" && (
              <img
                alt={`${network} icon`}
                className="size-6 rounded-full group-disabled:saturate-50"
                src={resolveIconPath(coins, network)}
              />
            )}
            <span className="font-text font-light uppercase">{network}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Networks;
