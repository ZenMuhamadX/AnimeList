import Header from "@/components/AnimeList/header";
import AnimeList from "../components/AnimeList";

const Page = async () => {
   const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
   );
   const topAnime = await response.json();

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
