"use client";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteComment = ({ id }) => {
   const router = useRouter();
   const data = { id };

   const handleDelete = async (e) => {
      e.preventDefault();
      const res = await fetch(`/api/v1/delete`, {
         method: "POST",
         body: JSON.stringify(data),
      });
      if (res.status === 200) {
         router.refresh();
      }
   };

   return (
      <button
         onClick={handleDelete}
         className="bg-color-secondary text-color-primary border rounded-md border-color-primary px-4 py-2 transition transform hover:text-color-primary hover:border-color-accent  hover:bg-color-dark active:scale-105"
      >
         Delete Comment
      </button>
   );
};

export default DeleteComment;
