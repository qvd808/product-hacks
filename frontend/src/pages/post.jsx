import { ParagraphText, SectionHeader } from "../components/Common";
// import Link from "next/link";

export default function Post() {
  return (
    <main className="min-h-screen flex-col  p-[5%] bg-white">
      {/* Header */}
      <div className="flex justify-between">
        {/* left */}
        <SectionHeader className="text-dmsans-italic uppercase text-black font-bold ">
          Chomp
        </SectionHeader>
        {/* right */}
        <div>
          <img src="./images/user.svg"></img>
        </div>
      </div>
      {/* Subheader*/}
      <div className="flex justify-between mt-8">
        {/* left */}
        <a href="/">
          {" "}
          <div className="flex mr-10">
            <img src="./images/left.svg"></img>
            <ParagraphText className="text-dmsans uppercase font-bold ml-2">
              back
            </ParagraphText>
          </div>
        </a>

        {/* center */}
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
        <ParagraphText className="!text-3xl leading-[115%] text-start">
          The craziest things you can do with $5.50 CAD.
        </ParagraphText>
        {/* Post Sort */}
        <div className="mt-[18px] flex justify-between">
          <div className="bg-[#5D5AFF] rounded-md py-1 px-9">
            <ParagraphText className="uppercase text-white">
              Popular
            </ParagraphText>
          </div>
          <div className="bg-slate-200 rounded-md py-1 px-9">
            <ParagraphText className="uppercase">Recent</ParagraphText>
          </div>
          <div className="bg-slate-200 rounded-md py-1 px-9">
            <ParagraphText className="uppercase">Nearby</ParagraphText>
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

        {/* Picture */}
        <div className="mt-2">
          <div className="relative bg-slate-200 min-h-52 max-h-96 md:max-h-[1000px] rounded-md">
            <img
              className="w-full min-h-52 max-h-96 md:max-h-[1000px] rounded-lg"
              src="./images/o.jpg"
            ></img>
            <div class="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-r from-transparent to-black opacity-40"></div>
            {/* top icon */}
            <div className="absolute top-3 left-4 rounded-xl bg-slate-200 py-1 px-3">
              <ParagraphText className="uppercase font-semibold">
                Top
              </ParagraphText>
            </div>
            {/* side buttons */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="">
                <img src="./images/arrow-up-circle.svg"></img>
              </div>
              <ParagraphText className="text-lg text-white font-normal mt-6">
                200
              </ParagraphText>
              <div className="mt-6">
                <img src="./images/arrow-down-circle.svg"></img>
              </div>
            </div>
          </div>
        </div>
        {/* Caption */}
        <div className="flex justify-between mt-2 ml-2">
          {/* left */}
          <div>
            <ParagraphText className="text-md">Fun day on Grouse</ParagraphText>
          </div>
          {/* right */}
          <div className="flex">
            <img src="./images/message-circle.svg"></img>
            <ParagraphText className="text-md ml-1">12</ParagraphText>
            <img className="ml-5 mr-2" src="./images/share.svg"></img>
          </div>
        </div>
      </div>
    </main>
  );
}
