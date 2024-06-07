import Link from "next/link";
import { authUserSession } from "@/lib/auth-lib";

const UserAction = async () => {
   const user = await authUserSession();
   const actionLabel = user ? "Sign Out" : "Sign In";
   const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";

   return (
      <div className="flex gap-2 justify-between">
         {user ? (
            <Link href="/user/dashboard" className="py-1">
               Dashboard
            </Link>
         ) : null}
         <Link
            href={actionUrl}
            className="rounded-full bg-color-dark hover:bg-color-primary hover:text-color-dark transition-all text-color-accent py-1 px-12 inline-block"
         >
            {actionLabel}
         </Link>
      </div>
   );
};

export default UserAction;
