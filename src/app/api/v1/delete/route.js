import { db } from "@/lib/supabase";

export async function POST(request) {
   try {
      const { id } = await request.json();

      const { error, status } = await db
         .from("animelist_comment")
         .delete()
         .eq("id", id);

      if (error) {
         return {
            status: status,
            body: JSON.stringify({
               message: error.message,
               isDelete: false,
            }),
         };
      }

      return {
         status: 200,
         body: JSON.stringify({
            message: "Delete Success",
            isDelete: true,
         }),
      };
   } catch (error) {
      return {
         status: 500,
         body: JSON.stringify({
            message: "Internal Server Error",
            error: error.message,
            isDelete: false,
         }),
      };
   }
}
