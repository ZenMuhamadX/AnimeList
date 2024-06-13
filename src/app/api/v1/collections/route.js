import { db } from "@/lib/supabase";

export async function POST(request) {
   const { mal_id, user_email, anime_title, anime_image, alt_image } =
      await request.json();

   const data = { mal_id, user_email, anime_image, anime_title, alt_image };

   const { error, status, statusText } = await db
      .from("animelist_collection")
      .insert(data);
   if (error) {
      return Response.json({
         status: status,
         message: statusText,
         isCreated: false,
      });
   } else {
      return Response.json({
         status: status,
         message: statusText,
         isCreated: true,
      });
   }
}
