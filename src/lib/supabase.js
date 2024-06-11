import { createClient } from "@supabase/supabase-js";

export const db = createClient(
   process.env.NEXT_PUBLIC_SUPABASE_URL,
   SUPABASE_SECRET_KEY
);
