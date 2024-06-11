import { db } from "@/lib/supabase";

export async function POST(request) {
   const { mal_id, user_email } = await request.json();
   const data = { mal_id, user_email };

   const insert = await db.from("animelist_collection").insert(data);

   return Response.json({
      response: insert,
   });
}
