import SearchIcon from "./icons/SearchIcon";

const SearchInput = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="relative">
      <span
        className="absolute left-0 top-0 bottom-0 flex items-center pl-1"
        aria-hidden
      >
        <SearchIcon />
      </span>
      <input
        type="text"
        aria-label="Search"
        placeholder={placeholder}
        className="w-full bg-darkNight text-white pl-11 py-1 rounded"
      />
    </div>
  );
};

export default SearchInput;
