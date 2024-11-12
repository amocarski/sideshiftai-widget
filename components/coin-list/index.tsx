import { getCoinData } from "@/lib/sideshift";
import List from "./list";

const CoinList = async () => {
  const coins = await getCoinData();

  return (
    <div className="relative flex h-[95rem] max-h-screen flex-col overflow-hidden">
      <List coins={coins} />
    </div>
  );
};

export default CoinList;
