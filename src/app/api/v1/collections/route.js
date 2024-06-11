import { db } from "@/lib/supabase";

export async function POST(request) {
   const { anime_mal_id, user_email } = await request.json();
   const data = { anime_mal_id, user_email };

   const insert = await db.from("animelist_collection").insert(data).select();

   return Response.json({
      response: insert,
   });
}
