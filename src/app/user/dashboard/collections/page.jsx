import Header from "@/components/dashboard/header";
import Image from "next/image";
import Link from "next/link";
import { db } from "@/lib/supabase";
import { authUserSession } from "@/lib/auth-lib";
import { redirect } from "next/navigation";

const Page = async () => {
   const user = await authUserSession();
   if (!user) {
      redirect("/api/auth/signin");
   }
   const dataCollections = await db
      .from("animelist_collection")
      .select("*")
      .eq("user_email", user?.email);
   return (
      <section className="px-4 mt-4 w-full">
         <Header title={"MY Collections"} />
         <div className=" gap-4 grid sm:grid-cols-2 lg:grid-cols-4">
            {dataCollections.data.map((collect, index) => {
               return (
                  <Link
                     key={index}
                     href={`/anime/${collect.mal_id}`}
                     className="relative border-2 border-color-accent"
                  >
                     <Image
                        src={collect.anime_image}
                        alt={collect.alt_image}
                        width={350}
                        height={350}
                        className="w-full"
                     />
                     <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16 ">
                        <h5 className="text-xl text-center">
                           {collect.anime_title}
                        </h5>
                     </div>
                  </Link>
               );
            })}
         </div>
      </section>
   );
};

export default Page;
