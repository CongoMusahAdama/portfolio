export const nowBooks = [
  {
    title: "Rich Dad Poor Dad",
    meta: "Robert Kiyosaki",
    cover: "https://covers.openlibrary.org/b/isbn/9781612680194-S.jpg",
  },
  {
    title: "The Lean Startup",
    meta: "Eric Ries",
    cover: "https://covers.openlibrary.org/b/isbn/9780307887894-S.jpg",
  },
  {
    title: "The Qur'an",
    meta: "Daily reading",
    cover: null,
  },
];

export const nowLately = [
  {
    num: "01",
    title: "Gospel Old Tunes, Vol. 1",
    artist: "Evangelist Diana Asamoah",
    cover: "/assets/now/diana-asamoah.jpg",
  },
  {
    num: "02",
    title: "Me Judge Akasa",
    artist: "Mama Esther",
    cover: "/assets/now/mama-esther.jpg",
  },
  {
    num: "03",
    title: "Gye No Di",
    artist: "Esther Smith",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/13/36/6c/13366c3c-8735-a917-5688-e20bcb4e20ab/artwork.jpg/100x100bb.jpg",
  },
];

type FavouriteItem =
  | { label: string; image: string; icon?: never }
  | { label: string; icon: "football" | "film" | "podcast" | "cooking"; image?: never };

export const nowFavourites: FavouriteItem[] = [
  { label: "Manchester United", image: "/assets/now/manchester-united.png" },
  { label: "Football", icon: "football" },
  { label: "Local movies", icon: "film" },
  { label: "Podcasts", icon: "podcast" },
  { label: "Cooking", icon: "cooking" },
];
