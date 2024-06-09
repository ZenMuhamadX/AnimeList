"use client";
import React, { useState } from "react";

const ButtonCollections = ({ anime_mal_id, user_email }) => {
   const [isCreated, setIsCreted] = useState(false);
   const handleButton = async (e) => {
      e.preventDefault();
      const data = { anime_mal_id, user_email };
      const response = await fetch("/api/v1/collections", {
         method: "POST",
         body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.response.status == 201) {
         setIsCreted(true);
      } else {
         setIsCreted(false);
      }
   };
   return (
      <>
         {isCreated ? (
            <p className="text-color-primary">added to collections</p>
         ) : (
            <button
               onClick={handleButton}
               className="px-2 py-2 bg-color-accent text-color-dark hover:scale-90 font-bold transition-all hover:bg-opacity-95 rounded-full"
            >
               Add to collections
            </button>
         )}
      </>
   );
};

export default ButtonCollections;
