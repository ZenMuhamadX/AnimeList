import Header from "@/components/dashboard/header";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
   return (
      <section className="px-4 mt-4 w-full">
         <Header title={"MY Collections"} />
         <div className=" gap-4 grid sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/" className="relative border-2 border-color-accent">
               <Image
                  src="/"
                  alt="..."
                  width={350}
                  height={350}
                  className="w-full"
               />
               <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16 ">
                  <h5 className="text-xl text-center">Judul Anime</h5>
               </div>
            </Link>
            <Link href="/" className="relative border-2 border-color-accent">
               <Image
                  src="/"
                  alt="..."
                  width={350}
                  height={350}
                  className="w-full"
               />
               <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16 ">
                  <h5 className="text-xl text-center">Judul Anime</h5>
               </div>
            </Link>{" "}
            <Link href="/" className="relative border-2 border-color-accent">
               <Image
                  src="/"
                  alt="..."
                  width={350}
                  height={350}
                  className="w-full"
               />
               <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16 ">
                  <h5 className="text-xl text-center">Judul Anime</h5>
               </div>
            </Link>{" "}
            <Link href="/" className="relative border-2 border-color-accent">
               <Image
                  src="/"
                  alt="..."
                  width={350}
                  height={350}
                  className="w-full"
               />
               <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16 ">
                  <h5 className="text-xl text-center">Judul Anime</h5>
               </div>
            </Link>
         </div>
      </section>
   );
};

export default Page;
