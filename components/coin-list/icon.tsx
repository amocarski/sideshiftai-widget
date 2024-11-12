import { resolveIconPath } from "@/lib/utils";
import { Coin } from "@/types";

type IconProps = {
  coin: string;
  network: string;
  coins: Coin[];
};

const Icon = ({ coin, coins, network }: IconProps) => {
  return (
    <div className="relative mr-4 shrink-0 xs:ml-5">
      <img
        alt={`${coin} icon`}
        className="block aspect-square h-7 rounded-full group-disabled:opacity-60 xs:h-9"
        src={`/coin-icons/${coin.toLowerCase()}.svg`}
      />
      {network !== "internal" && (
        <img
          alt={`${network} icon`}
          className="absolute bottom-[-4px] right-[-4px] block h-4 w-4 rounded-full group-disabled:saturate-50"
          src={resolveIconPath(coins, network)}
        />
      )}
    </div>
  );
};

export default Icon;
