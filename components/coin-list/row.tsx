import { Coin } from "@/types";
import { Button } from "../ui/button";
import Balance from "./balance";
import Icon from "./icon";
import Name from "./name";

type RowProps = {
  name: string;
  coin: string;
  network: string;
  coins: Coin[];
  value?: string;
};

const Row = ({ name, coin, network, coins, value }: RowProps) => {
  // here I'd use a real market value
  const mockedMarketValue = value ? 45.78 : null;

  return (
    <li className="relative list-none font-text">
      <Button aria-label={`Select ${name}`}>
        <span className="flex items-center justify-start truncate">
          <Icon coin={coin} coins={coins} network={network} />
          <Name name={name} coin={coin} network={network} />
        </span>
        <Balance amount={value || "0"} marketValue={mockedMarketValue} />
      </Button>
    </li>
  );
};

export default Row;
