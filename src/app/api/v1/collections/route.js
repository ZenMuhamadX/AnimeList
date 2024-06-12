import { db } from "@/lib/supabase";

export async function POST(request) {
   const { mal_id, user_email, anime_title, anime_image, alt_image } =
      await request.json();

   const data = { mal_id, user_email, anime_image, anime_title, alt_image };

   const insert = await db.from("animelist_collection").insert(data);

   return Response.json({
      response: insert,
   });
}
