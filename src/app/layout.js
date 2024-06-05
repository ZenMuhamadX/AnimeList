import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "AnimeList",
   description: "ZENN Animelist",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={inter.className} suppressHydrationWarning={true}>
            <Navbar />
            {children}
         </body>
      </html>
   );
}
