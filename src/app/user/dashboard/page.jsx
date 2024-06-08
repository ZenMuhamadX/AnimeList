import { authUserSession } from "@/lib/auth-lib";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
   const user = await authUserSession();
   return (
      <div className="text-color-primary">
         <h3>DASHBOARD</h3>
         <h1>Welcome, {user?.name}</h1>
         <Image
            alt="..."
            width={250}
            height={250}
            src={user?.image}
            className="border-2 border-color-primary rounded-full"
         />
      </div>
   );
};
export default Page;
