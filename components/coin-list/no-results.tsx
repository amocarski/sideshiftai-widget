const NoResults = () => {
  return (
    <div className="text-new-black flex h-full flex-col place-items-center justify-center font-display text-2xl dark:text-smoke">
      <div className="mb-5" aria-label="Shrugging face drawing">
        ¯\_(ツ)_/¯
      </div>
      <span>Nothing found</span>
    </div>
  );
};

export default NoResults;
