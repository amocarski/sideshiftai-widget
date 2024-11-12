type NameProps = {
  name: string;
  coin: string;
  network: string;
};

const Name = ({ name, coin, network }: NameProps) => {
  return (
    <div className="truncate">
      <div className="flex items-center justify-start">
        <span className="mr-2 truncate text-lg font-medium tracking-wide text-white group-disabled:text-opacity-60 xs:text-lg">
          {name}
        </span>
      </div>
      <div className="text-dark-gray text-left text-base font-light group-disabled:text-opacity-60 dark:text-smoke xs:text-base">
        {coin}
        <span className="mx-1">•</span>
        <span className="uppercase group-disabled:text-opacity-60 dark:text-pixel-blue">
          {network}
        </span>
      </div>
    </div>
  );
};

export default Name;
