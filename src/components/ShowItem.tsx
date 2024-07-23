import Image from "next/image";
import BookmarkIcon from "@/components/icons/BookmarkIcon";
import MoviesIcon from "./icons/MoviesIcon";
import { ShowInfo } from "@/lib/types";

const ShowItem = ({ name, year, rating, type, thumbnail }: ShowInfo) => {
  return (
    <div>
      <div className="relative h-[6.9rem] rounded-lg overflow-hidden bg-night md:h-[8.8rem] xl:h-[11rem]">
        <Image
          src={thumbnail.small}
          alt=""
          fill
          sizes="(max-width: 768) 10rem"
        />
        <button className="absolute z-1 top-2 right-2 w-8 h-8 flex justify-center items-center bg-night/40 rounded-full md:right-4 md:top-4">
          <BookmarkIcon />
        </button>
      </div>
      <div className="mt-[0.38rem] flex items-center gap-[0.4rem] md:gap-[0.55rem]">
        <p className="text-[0.68rem] tracking-[-0.022em] flex items-center md:text-[0.84rem]">
          <span className="mr-2">{year}</span>
          <span className="h-[0.1rem] w-[0.1rem] rounded-full bg-white md:w-[0.2rem] md:h-[0.2rem]"></span>
        </p>
        <span>
          <MoviesIcon widthClass="w-[0.68rem] md:w-[0.75rem]" />
        </span>
        <span>
          <p className="text-[0.63rem] flex items-center md:text-[0.74rem]">
            <span className="mr-2">{type}</span>
            <span className="h-[0.1rem] w-[0.1rem] rounded-full bg-white md:h-[0.2rem] md:w-[0.2rem]"></span>
          </p>
        </span>
        <span>
          <p className="text-[0.6rem] uppercase md:text-[0.74rem]">{rating}</p>
        </span>
      </div>
      <p className="text-[0.9rem] tracking-[-0.01em] capitalize md:text-[1.15rem]">
        {name}
      </p>
    </div>
  );
};

export default ShowItem;
