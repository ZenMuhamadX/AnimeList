import { db } from "@/lib/supabase";
import React from "react";

const CommentBox = async ({ mal_id }) => {
   const comments = await db
      .from("animelist_comment")
      .select()
      .eq("mal_id", mal_id);
   return (
      <div className="grid grid-cols-4 gap-4 mb-4">
         {comments.data.map((comment) => {
            return (
               <div
                  key={comment.id}
                  className="text-color-dark bg-color-primary p-4 rounded-md"
               >
                  <p className="">{`Username: ${comment.username}`}</p>
                  <p className="">{comment.comment}</p>
               </div>
            );
         })}
      </div>
   );
};

export default CommentBox;
