import SearchIcon from "./icons/SearchIcon";

const SearchInput = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="relative lg:pr-8">
      <span
        className="absolute left-0 top-0 bottom-0 flex items-center pl-1 md:pl-0 lg:pl-3"
        aria-hidden
      >
        <SearchIcon />
      </span>
      <input
        type="text"
        aria-label="Search"
        placeholder={placeholder}
        className="w-full bg-darkNight font-light text-white pl-11 py-1 rounded md:text-[1.5rem] md:pl-14 lg:text-[1.6rem]"
      />
    </div>
  );
};

export default SearchInput;
