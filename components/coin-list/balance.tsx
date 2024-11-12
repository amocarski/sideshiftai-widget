type BalanceProps = {
  amount: string;
  marketValue: number | null;
};

const Balance = ({ amount, marketValue }: BalanceProps) => {
  return (
    <div className="flex justify-self-end">
      <div className="relative z-10 text-right text-base font-light text-pixel-blue group-disabled:text-opacity-80 xs:mr-10">
        {amount} <br />
        {marketValue && (
          <span className="text-dark-gray whitespace-nowrap text-sm group-disabled:text-opacity-60 dark:text-smoke">
            ≈ ${marketValue}
          </span>
        )}
      </div>
    </div>
  );
};

export default Balance;
