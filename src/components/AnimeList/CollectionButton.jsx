"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ButtonCollections = ({
   mal_id,
   user_email,
   anime_image,
   anime_title,
   alt_image,
}) => {
   const router = useRouter();
   const [isCreated, setIsCreated] = useState(false);

   const handleButton = async (e) => {
      e.preventDefault();
      const data = { mal_id, user_email, anime_image, anime_title, alt_image };
      const response = await fetch("/api/v1/collections", {
         method: "POST",
         body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.isCreated == true) {
         setIsCreated(true);
         router.refresh();
      } else {
         setIsCreated(false);
      }
      return;
   };
   return (
      <>
         {isCreated ? (
            <p className="text-color-primary text-xl">added to collections</p>
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
