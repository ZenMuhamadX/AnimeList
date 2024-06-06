"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const Search = () => {
   const searchRef = useRef();
   const router = useRouter();

   const handleSearch = (event) => {
      const keyWord = searchRef.current.value;

      if (!keyWord) return;

      if (event.key == "Enter" || event.type == "click") {
         event.preventDefault();
         router.push(`/search/${keyWord}`);
      }
   };
   return (
      <div className="relative">
         <input
            placeholder="cari anime..."
            className="w-full p-2 rounded"
            ref={searchRef}
            onKeyDown={handleSearch}
            required
         />
         <button className="absolute top-2 end-2" onClick={handleSearch}>
            <MagnifyingGlass size={24} />
         </button>
      </div>
   );
};
export default Search;
