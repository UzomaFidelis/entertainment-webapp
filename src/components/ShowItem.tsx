import Image from "next/image";
import BookmarkIcon from "@/components/icons/BookmarkIcon";
import MoviesIcon from "./icons/MoviesIcon";
import { ShowInfo } from "@/lib/types";

const ShowItem = ({ name, year, rating, type, thumbnail }: ShowInfo) => {
  return (
    <div>
      <div className="relative h-[6.9rem] rounded-lg overflow-hidden bg-night">
        <Image
          src={thumbnail.small}
          alt=""
          fill
          sizes="(max-width: 768) 10rem"
        />
        <button className="absolute z-1 top-2 right-2 w-8 h-8 flex justify-center items-center bg-night/40 rounded-full">
          <BookmarkIcon />
        </button>
      </div>
      <div className="mt-[0.38rem] flex items-center gap-[0.4rem]">
        <p className="text-[0.68rem] tracking-[-0.022em] flex items-center">
          <span className="mr-2">{year}</span>
          <span className="h-[0.1rem] w-[0.1rem] rounded-full bg-white"></span>
        </p>
        <span>
          <MoviesIcon widthClass="w-[0.68rem]" />
        </span>
        <span>
          <p className="text-[0.63rem] flex items-center">
            <span className="mr-2">{type}</span>
            <span className="h-[0.1rem] w-[0.1rem] rounded-full bg-white"></span>
          </p>
        </span>
        <span>
          <p className="text-[0.6rem] uppercase">{rating}</p>
        </span>
      </div>
      <p className="text-[0.9rem] tracking-[-0.01em] capitalize">{name}</p>
    </div>
  );
};

export default ShowItem;
