import Image from "next/image";
import { dm_sans } from "./layout";
import { ParagraphText } from "@/app/components/Common";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <ParagraphText className="dmsans text-black">
          Whereas recognitio
        </ParagraphText>
        Main page
      </div>
    </main>
  );
}
