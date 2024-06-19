import { authUserSession } from "@/lib/auth-lib";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const Page = async () => {
   const user = await authUserSession();
   if (!user) redirect("/api/auth/signin");
   return (
      <div className=" mt-8 flex flex-col justify-center items-center text-color-primary">
         <h5 className="text-2xl font-bold">Welcome, {user?.name}</h5>
         <Image
            alt="..."
            width={250}
            height={250}
            src={user?.image}
            className="border-2 hover:scale-100 transition-all border-color-primary rounded-full"
         />
         <div className="py-8 flex gap-4 flex-wrap">
            <Link
               className="hover:bg-opacity-75 rounded-2xl active:scale-95 transition-all  bg-color-accent text-color-dark font-bold px-4 py-3 text-xl"
               href="/user/dashboard/collections"
            >
               My Collection
            </Link>
            <Link
               className="hover:bg-opacity-75 rounded-2xl active:scale-95 transition-all  bg-color-accent text-color-dark font-bold px-4 py-3 text-xl"
               href="/user/dashboard/comment"
            >
               My Comment
            </Link>
         </div>
      </div>
   );
};
export default Page;
