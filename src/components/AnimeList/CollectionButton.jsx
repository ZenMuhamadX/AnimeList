"use client";
import React from "react";

const ButtonCollections = ({ anime_mal_id, user_email }) => {
   const handleButton = async (e) => {
      e.preventDefault();
      alert("click");
   };
   return (
      <>
         <button
            onClick={handleButton}
            className="px-2 py-2 bg-color-accent text-color-dark hover:scale-90 font-bold transition-all hover:bg-opacity-95 rounded-full"
         >
            Add to collections
         </button>
      </>
   );
};

export default ButtonCollections;
