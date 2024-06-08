"use client";
import { FileSearch } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Page = () => {
   const router = useRouter();
   const handleBack = (e) => {
      e.preventDefault();
      router.back();
   };
   return (
      <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
         <div className="flex justify-center items-center gap-4 flex-col">
            <FileSearch size={44} className="text-color-accent" />
            <h3 className="text-color-accent text-4xl font-bold">NOT FOUND</h3>
            <button
               onClick={handleBack}
               className="text-color-primary hover:text-color-accent transition-all underline"
            >
               Back
            </button>
         </div>
      </div>
   );
};

export default Page;
