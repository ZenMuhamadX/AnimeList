"use client";
import { ArrowArcLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
   const router = useRouter();
   const handleBack = (e) => {
      e.preventDefault();
      router.back();
   };
   return (
      <div className="flex justify-between items-center mb-4">
         <button
            className="text-color-primary hover:scale-95"
            onClick={handleBack}
         >
            <ArrowArcLeft size={32} />
         </button>
         <h3 className="font-bold text-2xl text-color-primary">{title}</h3>
      </div>
   );
};

export default Header;
