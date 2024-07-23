import { ShowInfo } from "./types";

const IMG_DIR = "/assets/thumbnails";

export const trendingMovies: (ShowInfo & {
  sliderThumbnail: { small: string; large: string };
})[] = [
  {
    name: "Beyond Earth",
    year: 2019,
    type: "Movie",
    rating: "PG",
    thumbnail: {
      small: `${IMG_DIR}/beyond-earth/regular/small.jpg`,
      medium: `${IMG_DIR}/beyond-earth/regular/medium.jpg`,
      large: `${IMG_DIR}/beyond-earth/regular/large.jpg`,
    },
    sliderThumbnail: {
      small: `${IMG_DIR}/beyond-earth/trending/small.jpg`,
      large: `${IMG_DIR}/beyond-earth/trending/large.jpg`,
    },
  },
  {
    name: "Bottom Gear",
    year: 2021,
    type: "Movie",
    rating: "PG",
    thumbnail: {
      small: `${IMG_DIR}/bottom-gear/regular/small.jpg`,
      medium: `${IMG_DIR}/bottom-gear/regular/medium.jpg`,
      large: `${IMG_DIR}/bottom-gear/regular/large.jpg`,
    },
    sliderThumbnail: {
      small: `${IMG_DIR}/bottom-gear/trending/small.jpg`,
      large: `${IMG_DIR}/bottom-gear/trending/large.jpg`,
    },
  },
  {
    name: "Undiscovered Cities",
    year: 2019,
    type: "TV Series",
    rating: "18+",
    thumbnail: {
      small: `${IMG_DIR}/undiscovered-cities/regular/small.jpg`,
      medium: `${IMG_DIR}/undiscovered-cities/regular/medium.jpg`,
      large: `${IMG_DIR}/undiscovered-cities/regular/large.jpg`,
    },
    sliderThumbnail: {
      small: `${IMG_DIR}/undiscovered-cities/trending/small.jpg`,
      large: `${IMG_DIR}/undiscovered-cities/trending/large.jpg`,
    },
  },
  {
    name: "1998",
    year: 2021,
    type: "Movie",
    rating: "18+",
    thumbnail: {
      small: `${IMG_DIR}/1998/regular/small.jpg`,
      medium: `${IMG_DIR}/1998/regular/medium.jpg`,
      large: `${IMG_DIR}/1998/regular/large.jpg`,
    },
    sliderThumbnail: {
      small: `${IMG_DIR}/1998/trending/small.jpg`,
      large: `${IMG_DIR}/1998/trending/large.jpg`,
    },
  },
  {
    name: "Dark Side of the Moon",
    year: 2018,
    type: "TV Series",
    rating: "PG",
    thumbnail: {
      small: `${IMG_DIR}/dark-side-of-the-moon/regular/small.jpg`,
      medium: `${IMG_DIR}/dark-side-of-the-moon/regular/medium.jpg`,
      large: `${IMG_DIR}/dark-side-of-the-moon/regular/large.jpg`,
    },
    sliderThumbnail: {
      small: `${IMG_DIR}/dark-side-of-the-moon/trending/small.jpg`,
      large: `${IMG_DIR}/dark-side-of-the-moon/trending/large.jpg`,
    },
  },
];

export const movies: ShowInfo[] = [
  {
    name: "The Great Lands",
    year: 2019,
    type: "Movie",
    rating: "E",
    thumbnail: {
      small: `${IMG_DIR}/the-great-lands/regular/small.jpg`,
      medium: `${IMG_DIR}/the-great-lands/regular/medium.jpg`,
      large: `${IMG_DIR}/the-great-lands/regular/large.jpg`,
    },
  },
  {
    name: "The diary",
    year: 2019,
    type: "TV Series",
    rating: "PG",
    thumbnail: {
      small: `${IMG_DIR}/the-diary/regular/small.jpg`,
      medium: `${IMG_DIR}/the-diary/regular/medium.jpg`,
      large: `${IMG_DIR}/the-diary/regular/large.jpg`,
    },
  },
  {
    name: "Earth's untouched",
    year: 2017,
    type: "Movie",
    rating: "18+",
    thumbnail: {
      small: `${IMG_DIR}/earths-untouched/regular/small.jpg`,
      medium: `${IMG_DIR}/earths-untouched/regular/medium.jpg`,
      large: `${IMG_DIR}/earths-untouched/regular/large.jpg`,
    },
  },
  {
    name: "No land Beyond",
    year: 2019,
    type: "Movie",
    rating: "E",
    thumbnail: {
      small: `${IMG_DIR}/no-land-beyond/regular/small.jpg`,
      medium: `${IMG_DIR}/no-land-beyond/regular/medium.jpg`,
      large: `${IMG_DIR}/no-land-beyond/regular/large.jpg`,
    },
  },
  {
    name: "During the Hunt",
    year: 2016,
    type: "TV Series",
    rating: "PG",
    thumbnail: {
      small: `${IMG_DIR}/during-the-hunt/regular/small.jpg`,
      medium: `${IMG_DIR}/during-the-hunt/regular/medium.jpg`,
      large: `${IMG_DIR}/during-the-hunt/regular/large.jpg`,
    },
  },
  {
    name: "Autosport the Series",
    year: 2016,
    type: "TV Series",
    rating: "18+",
    thumbnail: {
      small: `${IMG_DIR}/autosport-the-series/regular/small.jpg`,
      medium: `${IMG_DIR}/autosport-the-series/regular/medium.jpg`,
      large: `${IMG_DIR}/autosport-the-series/regular/large.jpg`,
    },
  },
  {
    name: "Same Answer II",
    year: 2017,
    type: "Movie",
    rating: "E",
    thumbnail: {
      small: `${IMG_DIR}/same-answer-2/regular/small.jpg`,
      medium: `${IMG_DIR}/same-answer-2/regular/medium.jpg`,
      large: `${IMG_DIR}/same-answer-2/regular/large.jpg`,
    },
  },
  {
    name: "Below Echo",
    year: 2016,
    type: "TV Series",
    rating: "PG",
    thumbnail: {
      small: `${IMG_DIR}/below-echo/regular/small.jpg`,
      medium: `${IMG_DIR}/below-echo/regular/medium.jpg`,
      large: `${IMG_DIR}/below-echo/regular/large.jpg`,
    },
  },
  {
    name: "The Rockies",
    year: 2015,
    type: "TV Series",
    rating: "E",
    thumbnail: {
      small: `${IMG_DIR}/the-rockies/regular/small.jpg`,
      medium: `${IMG_DIR}/the-rockies/regular/medium.jpg`,
      large: `${IMG_DIR}/the-rockies/regular/large.jpg`,
    },
  },
  {
    name: "Relentless",
    year: 2017,
    type: "Movie",
    rating: "PG",
    thumbnail: {
      small: `${IMG_DIR}/relentless/regular/small.jpg`,
      medium: `${IMG_DIR}/relentless/regular/medium.jpg`,
      large: `${IMG_DIR}/relentless/regular/large.jpg`,
    },
  },
  {
    name: "Community of Ours",
    year: 2018,
    type: "TV Series",
    rating: "18+",
    thumbnail: {
      small: `${IMG_DIR}/community-of-ours/regular/small.jpg`,
      medium: `${IMG_DIR}/community-of-ours/regular/medium.jpg`,
      large: `${IMG_DIR}/community-of-ours/regular/large.jpg`,
    },
  },
  {
    name: "Van Life",
    year: 2015,
    type: "Movie",
    rating: "PG",
    thumbnail: {
      small: `${IMG_DIR}/van-life/regular/small.jpg`,
      medium: `${IMG_DIR}/van-life/regular/medium.jpg`,
      large: `${IMG_DIR}/van-life/regular/large.jpg`,
    },
  },
  {
    name: "The Heiress",
    year: 2021,
    type: "Movie",
    rating: "PG",
    thumbnail: {
      small: `${IMG_DIR}/the-heiress/regular/small.jpg`,
      medium: `${IMG_DIR}/the-heiress/regular/medium.jpg`,
      large: `${IMG_DIR}/the-heiress/regular/large.jpg`,
    },
  },
  {
    name: "Off the Track",
    year: 2017,
    type: "Movie",
    rating: "18+",
    thumbnail: {
      small: `${IMG_DIR}/off-the-track/regular/small.jpg`,
      medium: `${IMG_DIR}/off-the-track/regular/medium.jpg`,
      large: `${IMG_DIR}/off-the-track/regular/large.jpg`,
    },
  },
  {
    name: "Whispering Hill",
    year: 2017,
    type: "Movie",
    rating: "E",
    thumbnail: {
      small: `${IMG_DIR}/whispering-hill/regular/small.jpg`,
      medium: `${IMG_DIR}/whispering-hill/regular/medium.jpg`,
      large: `${IMG_DIR}/whispering-hill/regular/large.jpg`,
    },
  },
  {
    name: "112",
    year: 2013,
    type: "TV Series",
    rating: "PG",
    thumbnail: {
      small: `${IMG_DIR}/112/regular/small.jpg`,
      medium: `${IMG_DIR}/112/regular/medium.jpg`,
      large: `${IMG_DIR}/112/regular/large.jpg`,
    },
  },
  {
    name: "Lone Heart",
    year: 2017,
    type: "Movie",
    rating: "E",
    thumbnail: {
      small: `${IMG_DIR}/lone-heart/regular/small.jpg`,
      medium: `${IMG_DIR}/lone-heart/regular/medium.jpg`,
      large: `${IMG_DIR}/lone-heart/regular/large.jpg`,
    },
  },
  {
    name: "Production Line",
    year: 2018,
    type: "TV Series",
    rating: "PG",
    thumbnail: {
      small: `${IMG_DIR}/production-line/regular/small.jpg`,
      medium: `${IMG_DIR}/production-line/regular/medium.jpg`,
      large: `${IMG_DIR}/production-line/regular/large.jpg`,
    },
  },
  {
    name: "Dogs",
    year: 2016,
    type: "TV Series",
    rating: "E",
    thumbnail: {
      small: `${IMG_DIR}/dogs/regular/small.jpg`,
      medium: `${IMG_DIR}/dogs/regular/medium.jpg`,
      large: `${IMG_DIR}/dogs/regular/large.jpg`,
    },
  },
  {
    name: "Asia in 24 Days",
    year: 2020,
    type: "TV Series",
    rating: "PG",
    thumbnail: {
      small: `${IMG_DIR}/asia-in-24-days/regular/small.jpg`,
      medium: `${IMG_DIR}/asia-in-24-days/regular/medium.jpg`,
      large: `${IMG_DIR}/asia-in-24-days/regular/large.jpg`,
    },
  },
  {
    name: "The Tasty Tour",
    year: 2016,
    type: "TV Series",
    rating: "PG",
    thumbnail: {
      small: `${IMG_DIR}/the-tasty-tour/regular/small.jpg`,
      medium: `${IMG_DIR}/the-tasty-tour/regular/medium.jpg`,
      large: `${IMG_DIR}/the-tasty-tour/regular/large.jpg`,
    },
  },
  {
    name: "Darker",
    year: 2017,
    type: "Movie",
    rating: "18+",
    thumbnail: {
      small: `${IMG_DIR}/darker/regular/small.jpg`,
      medium: `${IMG_DIR}/darker/regular/medium.jpg`,
      large: `${IMG_DIR}/darker/regular/large.jpg`,
    },
  },
  {
    name: "Unresolved Cases",
    year: 2018,
    type: "TV Series",
    rating: "18+",
    thumbnail: {
      small: `${IMG_DIR}/unresolved-cases/regular/small.jpg`,
      medium: `${IMG_DIR}/unresolved-cases/regular/medium.jpg`,
      large: `${IMG_DIR}/unresolved-cases/regular/large.jpg`,
    },
  },
  {
    name: "Mission: Saturn",
    year: 2017,
    type: "Movie",
    rating: "PG",
    thumbnail: {
      small: `${IMG_DIR}/mission-saturn/regular/small.jpg`,
      medium: `${IMG_DIR}/mission-saturn/regular/medium.jpg`,
      large: `${IMG_DIR}/mission-saturn/regular/large.jpg`,
    },
  },
];

export const bookmarkedMovies = [
  {
    name: "Relentless",
    year: 2017,
    type: "Movie",
    rating: "PG",
    thumbnail: {
      small: `${IMG_DIR}/relentless/regular/small.jpg`,
      medium: `${IMG_DIR}/relentless/regular/medium.jpg`,
      large: `${IMG_DIR}/relentless/regular/large.jpg`,
    },
  },
  {
    name: "Earth's untouched",
    year: 2017,
    type: "Movie",
    rating: "18+",
    thumbnail: {
      small: `${IMG_DIR}/earths-untouched/regular/small.jpg`,
      medium: `${IMG_DIR}/earths-untouched/regular/medium.jpg`,
      large: `${IMG_DIR}/earths-untouched/regular/large.jpg`,
    },
  },
  {
    name: "1998",
    year: 2021,
    type: "Movie",
    rating: "18+",
    thumbnail: {
      small: `${IMG_DIR}/1998/regular/small.jpg`,
      medium: `${IMG_DIR}/1998/regular/medium.jpg`,
      large: `${IMG_DIR}/1998/regular/large.jpg`,
    },
  },
  {
    name: "The Heiress",
    year: 2021,
    type: "Movie",
    rating: "PG",
    thumbnail: {
      small: `${IMG_DIR}/the-heiress/regular/small.jpg`,
      medium: `${IMG_DIR}/the-heiress/regular/medium.jpg`,
      large: `${IMG_DIR}/the-heiress/regular/large.jpg`,
    },
  },
  {
    name: "Off the Track",
    year: 2017,
    type: "Movie",
    rating: "18+",
    thumbnail: {
      small: `${IMG_DIR}/off-the-track/regular/small.jpg`,
      medium: `${IMG_DIR}/off-the-track/regular/medium.jpg`,
      large: `${IMG_DIR}/off-the-track/regular/large.jpg`,
    },
  },
  {
    name: "Bottom Gear",
    year: 2021,
    type: "Movie",
    rating: "PG",
    thumbnail: {
      small: `${IMG_DIR}/bottom-gear/regular/small.jpg`,
      medium: `${IMG_DIR}/bottom-gear/regular/medium.jpg`,
      large: `${IMG_DIR}/bottom-gear/regular/large.jpg`,
    },
  },
  {
    name: "Lone Heart",
    year: 2017,
    type: "Movie",
    rating: "E",
    thumbnail: {
      small: `${IMG_DIR}/lone-heart/regular/small.jpg`,
      medium: `${IMG_DIR}/lone-heart/regular/medium.jpg`,
      large: `${IMG_DIR}/lone-heart/regular/large.jpg`,
    },
  },
  {
    name: "Darker",
    year: 2017,
    type: "Movie",
    rating: "18+",
    thumbnail: {
      small: `${IMG_DIR}/darker/regular/small.jpg`,
      medium: `${IMG_DIR}/darker/regular/medium.jpg`,
      large: `${IMG_DIR}/darker/regular/large.jpg`,
    },
  },
  {
    name: "Mission: Saturn",
    year: 2017,
    type: "Movie",
    rating: "PG",
    thumbnail: {
      small: `${IMG_DIR}/mission-saturn/regular/small.jpg`,
      medium: `${IMG_DIR}/mission-saturn/regular/medium.jpg`,
      large: `${IMG_DIR}/mission-saturn/regular/large.jpg`,
    },
  },
  {
    name: "Dark Side of the Moon",
    year: 2018,
    type: "TV Series",
    rating: "PG",
    thumbnail: {
      small: `${IMG_DIR}/dark-side-of-the-moon/regular/small.jpg`,
      medium: `${IMG_DIR}/dark-side-of-the-moon/regular/medium.jpg`,
      large: `${IMG_DIR}/dark-side-of-the-moon/regular/large.jpg`,
    },
  },
  {
    name: "The Rockies",
    year: 2015,
    type: "TV Series",
    rating: "E",
    thumbnail: {
      small: `${IMG_DIR}/the-rockies/regular/small.jpg`,
      medium: `${IMG_DIR}/the-rockies/regular/medium.jpg`,
      large: `${IMG_DIR}/the-rockies/regular/large.jpg`,
    },
  },
  {
    name: "Dogs",
    year: 2016,
    type: "TV Series",
    rating: "E",
    thumbnail: {
      small: `${IMG_DIR}/dogs/regular/small.jpg`,
      medium: `${IMG_DIR}/dogs/regular/medium.jpg`,
      large: `${IMG_DIR}/dogs/regular/large.jpg`,
    },
  },
];
