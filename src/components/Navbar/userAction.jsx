import Link from "next/link";
import { authUserSession } from "@/lib/auth-lib";

const UserAction = async () => {
   const user = await authUserSession();
   const actionLabel = user ? "Sign Out" : "Sign In";
   const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";

   return (
      <div className="flex gap-4 justify-between">
         {user ? (
            <Link href="/user/dashboard" className="py-1">
               Dashboard
            </Link>
         ) : null}
         <Link
            href={actionUrl}
            className="active:scale-95 rounded-2xl hover:bg-opacity-95 bg-color-dark transition-all text-color-accent py-1 px-12 inline-block"
         >
            {actionLabel}
         </Link>
      </div>
   );
};

export default UserAction;
