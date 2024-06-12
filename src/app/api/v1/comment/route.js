import { db } from "@/lib/supabase";

export async function POST(request) {
   const { mal_id, user_email, username, comment, anime_title } =
      await request.json();

   const data = { mal_id, user_email, username, comment, anime_title };

   const insert = await db.from("animelist_comment").insert(data);

   if (insert.error != null) {
      return Response.json({
         status: insert.status,
         message: insert.error,
         isCreated: false,
      });
   } else {
      return Response.json({
         status: insert.status,
         message: insert.error,
         isCreated: true,
      });
   }
}
