export const getAnime = async (resource, query) => {
   const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
   );
   const animeList = res.json();
   return animeList;
};

export const getNestedAnimeRecomended = async (resource, objectProperty) => {
   const res = await getAnime(resource);
   return res.data.flatMap((item) => item.entry);
};
