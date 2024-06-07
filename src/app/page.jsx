//page
import { getAnime } from "./lib/fetchAPI";
import Header from "@/components/AnimeList/header";
import AnimeList from "../components/AnimeList";

const Page = async () => {
   const topAnime = await getAnime("top/anime", "limit=8");
   return (
      <>
         <section>
            <Header
               title="Paling Populer"
               linkTitle="Lihat Semua"
               linkHref="/Populer"
            />
            <AnimeList api={topAnime} />
         </section>
      </>
   );
};

export default Page;
