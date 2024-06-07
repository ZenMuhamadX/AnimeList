import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
   title: "AnimeList",
   description: "ZENN Animelist",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <head>
            <script
               async
               src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9962964998808445"
               crossorigin="anonymous"
            ></script>
         </head>
         <body
            className={`${gabarito.className} bg-color-dark`}
            suppressHydrationWarning={true}
         >
            <Navbar />
            {children}
         </body>
         <amp-auto-ads
            type="adsense"
            data-ad-client="ca-pub-9962964998808445"
         ></amp-auto-ads>
      </html>
   );
}
