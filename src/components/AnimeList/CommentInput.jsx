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
               className="h-32 w-full text-xl p-4 border-2 border-color-accent rounded-lg focus:outline-none focus:border-color-secondary"
               placeholder="Place your comment..."
            />
            <button
               className="py-2 px-3 bg-color-accent text-color-primary rounded-lg hover:bg-color-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
               onClick={handlePosting}
            >
               Posting
            </button>
         </div>
      </>
   );
};
export default CommentInput;
