import SearchInput from "@/components/SearchInput";
import { bookmarkedMovies } from "@/lib/data";
import ShowItem from "@/components/ShowItem";

export default function BookmarkedMoviesPage() {
  return (
    <>
      <div className="px-3 pt-5 pb-[1.18rem]">
        <h1 className="sr-only"></h1>
        <SearchInput placeholder="Search for bookmarked shows" />
      </div>
      <div className="px-4">
        <h2 className="text-white font-light text-xl tracking-[-0.022em]">
          Bookmarked Movies
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 py-[1.4rem] text-white">
          {[...bookmarkedMovies]
            .filter((movie) => movie.type === "Movie")
            .map((movie, idx) => (
              <ShowItem {...movie} key={idx} />
            ))}
        </div>
      </div>
      <div className="px-4">
        <h2 className="text-white font-light text-xl tracking-[-0.022em]">
          Bookmarked TV Series
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 py-[1.4rem] text-white">
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
