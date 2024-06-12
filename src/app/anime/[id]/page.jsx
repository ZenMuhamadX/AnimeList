import { getAnime } from "@/lib/fetchAPI";
import VideoPlayer from "@/components/utils/videoPlayer";
import Image from "next/image";
import ButtonCollections from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/lib/auth-lib";
import { db } from "@/lib/supabase";
import Link from "next/link";

const Page = async ({ params: { id } }) => {
   const anime = await getAnime(`anime/${id}`);
   const user = await authUserSession();
   const collection = await db
      .from("animelist_collection")
      .select("*")
      .eq("user_email", user?.email)
      .eq("mal_id", id);
   const isCOllectionEmpty = collection.data.length === 0;
   return (
      <>
         <div className="pt-4 px-4">
            <h3 className="text-color-primary text-2xl">
               {anime.data.title} - {anime.data.year}
            </h3>
            {isCOllectionEmpty && user ? (
               <ButtonCollections mal_id={id} user_email={user?.email} />
            ) : (
               <Link
                  className="px-2 py-2 bg-color-accent text-color-dark hover:scale-90 font-bold transition-all hover:bg-opacity-95 rounded-full"
                  href="/api/auth/signin"
               >
                  Sign in to add Collection
               </Link>
            )}
         </div>
         <div className="pt-4 px-4 gap-2 flex text-color-primary overflow-x-auto">
            <div className="p-2 w-36 flex flex-col justify-center items-center rounded-full border-color-accent border">
               <h3 className="">Peringkat</h3>
               <p className="">{anime.data.rank}</p>
            </div>
            <div className="p-2 w-36 flex flex-col justify-center items-center rounded-full border-color-accent border">
               <h3 className="">Score</h3>
               <p className="">{anime.data.score}</p>
            </div>
            <div className="p-2 w-36 flex flex-col justify-center items-center rounded-full border-color-accent border">
               <h3 className="">Episode</h3>
               <p className="">{anime.data.episodes}</p>
            </div>
            <div className="p-2 w-36 flex flex-col justify-center items-center rounded-full border-color-accent border">
               <h3 className="">Duration</h3>
               <p className="">{anime.data.duration}</p>
            </div>
            <div className="p-2 w-36 flex flex-col justify-center items-center rounded-full border-color-accent border">
               <h3 className="">Source</h3>
               <p className="">{anime.data.source}</p>
            </div>
            <div className="p-2 w-36 flex flex-col justify-center items-center rounded-full border-color-accent border">
               <h3 className="">Season</h3>
               <p className="">{anime.data.season}</p>
            </div>
         </div>
         <div className=" sm:flex-nowrap flex-wrap pt-4 px-4 flex gap-2 text-color-primary">
            <Image
               src={anime.data.images.webp.image_url}
               alt={anime.data.images.jpg.image_url}
               width={250}
               height={250}
               className="rounded w-full object-cover"
            />
            <p className="text-color-primary text-justify text-xl">
               {anime.data.synopsis}
            </p>
         </div>
         <div className="">
            <VideoPlayer videoID={anime.data.trailer.youtube_id} />
         </div>
      </>
   );
};

export default Page;
