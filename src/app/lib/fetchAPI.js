export const getAnime = async (resource, query) => {
   const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
   );
   const animeList = res.json();
   return animeList;
};
