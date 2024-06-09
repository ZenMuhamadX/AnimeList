import { createClient } from "@supabase/supabase-js";

const db = createClient(
   process.env.NEXT_PUBLIC_SUPABASE_URL,
   process.env.SUPABASE_SECRET_KEY
);

export async function POST(request) {
   const { anime_mal_id, user_email } = await request.json();

   const datas = await db
      .from("animelist_collection")
      .insert({ anime_mal_id: anime_mal_id, user_email: user_email });

   return Response.json({
      response: datas,
   });
}
