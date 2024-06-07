import Link from "next/link";
import Search from "./inputSearch";

const Navbar = () => {
   return (
      <header className="bg-color-accent">
         <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
            <Link href="/" className="font-bold text-2xl">
               ZEN X AnimeList
            </Link>
            <Search />
            <Link href="/api/auth/signin" className="">
               Sign In
            </Link>
         </div>
      </header>
   );
};
export default Navbar;
