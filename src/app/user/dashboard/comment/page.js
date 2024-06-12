import Header from "@/components/dashboard/header";
import { authUserSession } from "@/lib/auth-lib";
import { db } from "@/lib/supabase";
import Link from "next/link";
import React from "react";

const CommentPage = async () => {
   const user = await authUserSession();
   if (!user) {
      redirect("/api/auth/signin");
   }
   const comments = await db
      .from("animelist_comment")
      .select("*")
      .eq("user_email", user.email);
   return (
      <section className="px-4 mt-4 w-full">
         <Header title={"MY Comment"} />
         <div className="grid grid-cols-1 py-2 gap-4">
            {comments.data.map((comment) => {
               return (
                  <Link
                     href={`/anime/${comment.mal_id}`}
                     key={comment.id}
                     className="text-color-dark bg-color-primary p-4 rounded-md shadow-md hover:shadow-color-accent transition-all"
                  >
                     <p className="font-bold text-sm">{`ID comment: ${comment.id}`}</p>
                     {" ------------------- "}
                     <br />
                     <p className="text-sm">{`Title: ${comment.anime_title}`}</p>
                     <p className="italic">{comment.comment}</p>
                  </Link>
               );
            })}
         </div>
      </section>
   );
};

export default CommentPage;
