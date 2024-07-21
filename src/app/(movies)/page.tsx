import SearchInput from "@/components/SearchInput";
import TrendingSlider from "@/components/TrendingSlider";
import ShowItem from "@/components/ShowItem";
import { movies } from "@/lib/data";

export default function Home() {
  return (
    <>
      <div className="px-3 pt-5 pb-[1.18rem]">
        <h1 className="sr-only">Movies and TV series</h1>
        <SearchInput placeholder="Search for movies or TV series" />
      </div>
      <div className="px-4">
        <h2 className="text-white font-light text-xl tracking-[-0.022em]">
          Trending
        </h2>
      </div>
      <div className="px-4 mt-[0.9rem]">
        <TrendingSlider />
      </div>
      <div className="px-4 mt-[1.56rem]">
        <h2 className="text-white font-light text-xl tracking-[-0.018em]">
          Recommended for you
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 py-[1.4rem] text-white">
          {movies.map((movie, idx) => (
            <ShowItem {...movie} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
}
