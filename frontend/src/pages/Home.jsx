import { ParagraphText, SectionHeader } from "../components/Common";
// import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex-col bg-white  ">
      <div className="p-[5%] bg-white">
        {/* Header */}
        <div className="flex justify-between">
          {/* left */}
          <SectionHeader className="text-dmsans italic uppercase text-black font-bold ">
            Chomp
          </SectionHeader>
          {/* right */}
          <div>
            <img src="./images/user.svg"></img>
          </div>
        </div>
        {/* Subheader*/}
        <div className="flex uppercase mt-8">
          <ParagraphText>Hello Vancouver!</ParagraphText>
        </div>
        {/* Post Section*/}
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <ParagraphText className="!text-3xl leading-[115%] text-start">
              The craziest things you can do with $5.50 CAD.
            </ParagraphText>
            <a href="/post">
              {" "}
              <div className="flex flex-col justify-center self-center align-middle">
                <div className="bg-[#5D5AFF] py-[8px] px-[0.5px] rounded-lg">
                  <img
                    className="w-[65px]"
                    src="./images/chevron-right.svg"
                  ></img>
                </div>
              </div>
            </a>
          </div>

          {/* User + location */}
          <div className="mt-5 flex justify-between">
            {/* left */}
            <div className="flex">
              <ParagraphText className=" text-slate-400 mr-1">
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
              <ParagraphText className="text-md">
                Fun day on Grouse
              </ParagraphText>
            </div>
            {/* right */}
            <div className="flex">
              <img src="./images/message-circle.svg"></img>
              <ParagraphText className="text-md ml-1">12</ParagraphText>
              <img className="ml-5 mr-2" src="./images/share.svg"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F9F9F9] w-full">
        {/* Second post  */}
        <div className="">
          <div className="px-[5%] py-[1.5%]">
            <ParagraphText className="uppercase text-start">
              Popular
            </ParagraphText>
            <div className="flex items-center justify-between">
              <ParagraphText className="text-xl w-[60%] mt-3 text-start">
                Let the yearly flying ant posts begin
              </ParagraphText>
              <img
                className="w-[65px]"
                src="./images/chevron-right-black.svg"
              ></img>
            </div>
            <div className="mt-2 mb-10">
              <div className="grid grid-cols-2">
                {/* left */}
                <div className="p-3 self-center">
                  <img
                    className="w-full min-h-[30px] max-h-[400px] rounded-lg"
                    src="./images/o.jpg"
                  ></img>
                </div>

                {/* right */}
                <div className="grid grid-rows-2">
                  <div className="p-3">
                    <img
                      className="w-full min-h-[30px] max-h-[150px] rounded-lg"
                      src="./images/vancouver.jpg"
                    ></img>
                  </div>
                  <div className="p-3">
                    {" "}
                    <img
                      className="w-full min-h-[30px] max-h-[150px] rounded-lg"
                      src="./images/plague-of-ants.jpg"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Third Post */}
        <div className="mt-1 px-[5%]">
          <div className="flex justify-between items-center">
            <ParagraphText className="text-xl leading-[115%] text-start">
              Show us where you and your ex broke up.
            </ParagraphText>
            <a href="/post">
              {" "}
              <div className="flex items-center justify-between">
                <img
                  className="w-[65px]"
                  src="./images/chevron-right-black.svg"
                ></img>
              </div>
            </a>
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
              <ParagraphText className="text-md">
                Fun day on Grouse
              </ParagraphText>
            </div>
            {/* right */}
            <div className="flex">
              <img src="./images/message-circle.svg"></img>
              <ParagraphText className="text-md ml-1">12</ParagraphText>
              <img className="ml-5 mr-2" src="./images/share.svg"></img>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
