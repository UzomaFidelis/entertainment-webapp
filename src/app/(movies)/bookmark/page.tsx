import SearchInput from "@/components/SearchInput";
import { bookmarkedMovies } from "@/lib/data";
import ShowItem from "@/components/ShowItem";

export default function BookmarkedMoviesPage() {
  return (
    <>
      <div className="px-3 pt-5 pb-[1.18rem] md:py-[1.7rem] md:px-0 lg:py-[2rem]">
        <h1 className="sr-only"></h1>
        <SearchInput placeholder="Search for bookmarked shows" />
      </div>
      <div className="px-4 md:px-0 md:mt-1 lg:pr-[2.19rem]">
        <h2 className="text-white font-light text-xl tracking-[-0.022em] md:text-[2.05rem]">
          Bookmarked Movies
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 py-[1.4rem] text-white md:grid-cols-3 md:gap-x-7 md:gap-y-[1.32rem] md:py-[1.75rem] lg:grid-cols-4 lg:gap-x-[2.35rem] lg:gap-y-[1.7rem] lg:mt-2">
          {[...bookmarkedMovies]
            .filter((movie) => movie.type === "Movie")
            .map((movie, idx) => (
              <ShowItem {...movie} key={idx} />
            ))}
        </div>
      </div>
      <div className="px-4 md:px-0 md:mt-1 lg:pr-[2.19rem]">
        <h2 className="text-white font-light text-xl tracking-[-0.022em] md:text-[2.05rem]">
          Bookmarked TV Series
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 py-[1.4rem] text-white md:grid-cols-3 md:gap-x-7 md:gap-y-[1.32rem] md:py-[1.75rem] lg:grid-cols-4 lg:gap-x-[2.35rem] lg:gap-y-[1.7rem] lg:mt-2">
          {[...bookmarkedMovies]
            .filter((movie) => movie.type === "TV Series")
            .map((movie, idx) => (
              <ShowItem {...movie} key={idx} />
            ))}
        </div>
      </div>
    </>
  );
}
