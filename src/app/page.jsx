//page
import { getAnime, getNestedAnimeRecomended, reproduce } from "../lib/fetchAPI";
import Header from "@/components/AnimeList/header";
import AnimeList from "../components/AnimeList";

const Page = async () => {
   const topAnime = await getAnime("top/anime", "limit=8");
   let recomendedAnime = await getNestedAnimeRecomended(
      "recommendations/anime",
      "entry"
   );

   recomendedAnime = reproduce(recomendedAnime, 24);

   return (
      <>
         <section>
            <Header
               title="Paling Populer"
               linkTitle="Lihat Semua"
               linkHref="/Populer"
            />
            <AnimeList api={topAnime} />
         </section>{" "}
         <section>
            <Header title="Rekomendasi" linkHref="/Populer" />
            <AnimeList api={recomendedAnime} />
         </section>
      </>
   );
};

export default Page;
