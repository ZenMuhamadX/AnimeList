//page
import { getAnime, getNestedAnimeRecomended } from "../lib/fetchAPI";
import Header from "@/components/AnimeList/header";
import AnimeList from "../components/AnimeList";

const Page = async () => {
   const topAnime = await getAnime("top/anime", "limit=8");
   let recomendedAnime = await getNestedAnimeRecomended(
      "recommendations/anime",
      "entry"
   );
   recomendedAnime.sort(() => Math.random() - 0.5);

   recomendedAnime = {
      data: recomendedAnime.slice(0, 24),
   };
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
