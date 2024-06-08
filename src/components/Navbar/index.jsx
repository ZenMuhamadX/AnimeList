import Link from "next/link";
import Search from "./inputSearch";
import UserAction from "./userAction";

const Navbar = () => {
   return (
      <header className="bg-color-accent">
         <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
            <Link
               href="/"
               className="font-bold text-2xl border rounded-lg hover:text-color-secondary transition-all hover:bg-color-primary p-2 bg-color-dark text-color-accent"
            >
               ZEN X AnimeList
            </Link>
            <Search />
            <UserAction />
         </div>
      </header>
   );
};
export default Navbar;
