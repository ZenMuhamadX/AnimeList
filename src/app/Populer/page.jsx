"use client";

import { getAnime } from "../../lib/fetchAPI";
import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/utils/HeaderMenu";
import Pagination from "@/components/utils/Pagination";
import AnimeList from "@/components/AnimeList";

const Page = async () => {
   const [page, setPage] = useState(1);
   const [topAnime, setTopAnime] = useState([]);

   const fetchData = async () => {
      const populerAnime = await getAnime("top/anime", `page=${page}`);
      setTopAnime(populerAnime);
   };

   useEffect(() => {
      fetchData();
   }, [page]);

   return (
      <>
         <HeaderMenu title={`Anime Terpopuler #${page}`} />
         <AnimeList api={topAnime} />
         <Pagination
            page={page}
            lastPage={topAnime.pagination?.last_visible_page}
            setPage={setPage}
         />
      </>
   );
};
export default Page;
