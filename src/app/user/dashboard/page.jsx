import { authUserSession } from "@/lib/auth-lib";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
   const user = await authUserSession();
   if (!user) {
      return (
         <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className=" text-color-primary flex justify-center items-center gap-4 flex-col">
               <Link
                  href="/api/auth/signin"
                  className="text-color-primary bg-color-accent hover:bg-color-primary hover:text-color-accent transition-all text-2xl border rounded-full p-4 "
               >
                  Login
               </Link>
            </div>
         </div>
      );
   }
   return (
      <div className="text-color-primary">
         <h3>DASHBOARD</h3>
         <h1>Welcome, {user?.name}</h1>
         <Image
            alt="..."
            width={250}
            height={250}
            src={user?.image}
            className="border-2 border-color-accent rounded-full"
         />
      </div>
   );
};
export default Page;
