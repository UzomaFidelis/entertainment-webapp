import SearchInput from "@/components/SearchInput";
import TrendingSlider from "@/components/TrendingSlider";
import ShowItem from "@/components/ShowItem";
import { movies } from "@/lib/data";

export default function Home() {
  return (
    <>
      <div className="px-3 pt-5 pb-[1.18rem] md:py-[1.7rem] md:px-0 lg:py-[2rem]">
        <h1 className="sr-only">Movies and TV series</h1>
        <SearchInput placeholder="Search for movies or TV series" />
      </div>
      <div className="px-4 md:px-0 md:mt-1">
        <h2 className="text-white font-light text-xl tracking-[-0.022em] md:text-[2.05rem]">
          Trending
        </h2>
      </div>
      <div className="px-4 mt-[0.9rem] md:px-0 md:mt-8 lg:mt-7">
        <TrendingSlider />
      </div>
      <div className="px-4 mt-[1.56rem] md:px-0 md:mt-[2.9rem] lg:pr-[2.19rem] lg:mt-[3rem]">
        <h2 className="text-white font-light text-xl tracking-[-0.018em] md:text-[2.05rem] md:tracking-[-0.028em]">
          Recommended for you
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 py-[1.4rem] text-white md:grid-cols-3 md:gap-x-7 md:gap-y-[1.32rem] md:py-[1.75rem] lg:grid-cols-4 lg:gap-x-[2.35rem] lg:gap-y-[1.7rem] lg:mt-2">
          {movies.map((movie, idx) => (
            <ShowItem {...movie} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
}
