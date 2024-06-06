import Header from "@/components/AnimeList/header";
import AnimeList from "@/components/AnimeList";

const Page = async ({ params }) => {
   const { keyword } = params;
   const keywordParse = decodeURI(keyword);
   const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keywordParse}`
   );
   const searchAnime = await response.json();

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
