import Header from "@/components/AnimeList/header";
import AnimeList from "@/components/AnimeList";
import { getAnime } from "@/app/lib/fetchAPI";

const Page = async ({ params }) => {
   const { keyword } = params;
   const keywordParse = decodeURI(keyword);
   const searchAnime = await getAnime("anime", `q=${keywordParse}`);

   return (
      <>
         <section>
            <Header title={`Pencarian Untuk ${keywordParse}...`} />
            <AnimeList api={searchAnime} />
         </section>
      </>
   );
};

export default Page;
