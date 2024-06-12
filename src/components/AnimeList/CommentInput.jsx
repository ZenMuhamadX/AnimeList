"use client";

import { useState } from "react";

const CommentInput = () => {
   const [comment, setComment] = useState("");

   const handleComment = (e) => {
      setComment(e.target.value);
   };

   const handlePosting = (e) => {
      e.preventDefault();
   };
   return (
      <>
         <div className="flex flex-col gap-2">
            <textarea
               onChange={handleComment}
               className="h-32 w-full text-xl p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
               placeholder="Tulis komentar Anda di sini..."
            />
            <button
               className="py-2 px-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
               onClick={handlePosting}
            >
               Posting
            </button>
         </div>
      </>
   );
};
export default CommentInput;
