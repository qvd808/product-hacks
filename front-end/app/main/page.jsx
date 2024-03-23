import { ParagraphText, SectionHeader } from "@/app/components/Common";

export default function main() {
  return (
    <main className="min-h-screen flex-col  p-[8%] bg-white">
      {/* Header */}
      <div className="flex justify-between">
        {/* left */}
        <SectionHeader className="text-dmsans-italic uppercase text-black font-bold ">
          Vanlife
        </SectionHeader>
        {/* right */}
        <div>
          <img src="./images/user.svg"></img>
        </div>
      </div>
      {/* Subheader*/}
      <div className="flex justify-between mt-10">
        {/* left */}
        <div>
          <ParagraphText className="text-dmsans uppercase">
            Closes in 3 days
          </ParagraphText>
        </div>
        {/* right */}
        <div>
          <ParagraphText className="text-dmsans uppercase">
            360 responses
          </ParagraphText>
        </div>
      </div>
      {/* Post Section*/}
      <div className="mt-3">
        <ParagraphText className="text-2xl">
          The craziest thing you can do with $5.50 CAD.
        </ParagraphText>
        {/* Post Sort */}
        <div className="mt-2 flex items-center h-full">
          <ParagraphText className="uppercase mr-2">Sort by</ParagraphText>
          <div className="bg-slate-200 rounded-lg p-1">
            <ParagraphText className="uppercase">Popular</ParagraphText>
          </div>
        </div>
        {/* User + location */}
        <div className="mt-5 flex justify-between">
          {/* left */}
          <div className="flex">
            <ParagraphText className="text-slate-400 mr-1">
              By BabyBottom
            </ParagraphText>
            <img src="./images/star.svg"></img>
          </div>
          {/* right */}
          <div className="flex">
            <img className="mr-2" src="./images/location.svg"></img>
            <ParagraphText className="text-slate-400">
              Granville Island
            </ParagraphText>
          </div>
        </div>
      </div>
    </main>
  );
}
