type SectionNameProps = {
  name: string;
};

const SectionName = ({ name }: SectionNameProps) => {
  return (
    <h3 className="text-dark-gray my-4 text-left font-text text-sm uppercase dark:text-smoke xs:pl-7">
      {name}
    </h3>
  );
};

export default SectionName;
