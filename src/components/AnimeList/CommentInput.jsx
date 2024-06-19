"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CommentInput = ({ mal_id, user_email, username, anime_title }) => {
   const [comment, setComment] = useState("");
   const [isCreated, setIsCreated] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const router = useRouter();

   const handleInput = (event) => {
      setComment(event.target.value);
   };

   const handlePosting = async (event) => {
      event.preventDefault();

      if (comment.length < 3) {
         setErrorMessage("Comment must be at least 3 characters long.");
         return;
      }

      const data = { mal_id, user_email, comment, username, anime_title };

      const response = await fetch("/api/v1/comment", {
         method: "POST",
         body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.status == 201) {
         setIsCreated(true);
         setComment("");
         setErrorMessage("");
         router.refresh();
      } else {
         setIsCreated(false);
      }
      return;
   };

   return (
      <div className="flex flex-col gap-2">
         {errorMessage && <p className="text-color-accent">{errorMessage}</p>}
         {isCreated && <p className="text-color-primary">Send...🟢</p>}
         <textarea
            onChange={handleInput}
            value={comment}
            className="w-full h-32 text-xl p-4 border-color-accent rounded-md"
            placeholder="Write your comment here"
         />
         {comment.length >= 3 && (
            <button
               onClick={handlePosting}
               className="w-52 py-2 px-2 rounded-md bg-color-accent active:scale-95 transition-all"
            >
               Posting Komentar
            </button>
         )}
      </div>
   );
};

export default CommentInput;
