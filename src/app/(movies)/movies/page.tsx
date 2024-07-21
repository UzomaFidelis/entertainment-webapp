import SearchInput from "@/components/SearchInput";
import { movies, trendingMovies } from "@/lib/data";
import ShowItem from "@/components/ShowItem";

export default function MoviePage() {
  return (
    <>
      <div className="px-3 pt-5 pb-[1.18rem]">
        <h1 className="sr-only">Movies</h1>
        <SearchInput placeholder="Search for movies" />
      </div>
      <div className="px-4">
        <h2 className="text-white font-light text-xl tracking-[-0.022em]">
          Movies
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 py-[1.4rem] text-white">
          {[...movies, ...trendingMovies]
            .filter((movie) => movie.type === "Movie")
            .map((movie, idx) => (
              <ShowItem {...movie} key={idx} />
            ))}
        </div>
      </div>
    </>
  );
}
