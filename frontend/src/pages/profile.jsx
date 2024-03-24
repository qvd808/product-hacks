import { Link } from "react-router-dom";
import { ParagraphText, SectionHeader } from "../components/Common";

export default function Profile() {
  return (
    <div className="p-[5%] mb-20">
      {/* Header */}
      <div className="flex justify-between">
        {/* left */}
        <SectionHeader className="text-dmsans !text-[#5D5AFF] italic uppercase font-bold ">
          Clik
        </SectionHeader>
        {/* right */}
        <a href="/profile">
          {" "}
          <div>
            <img src="./images/user.svg"></img>
          </div>
        </a>
      </div>
      {/*  Subheader*/}
      <div className="mt-5">
        <ParagraphText className="!text-xl uppercase font-black text-start">
          Profile
        </ParagraphText>
      </div>
      {/* Picture and name */}
      <div className="mt-2 flex border-b-2">
        <img
          src="./images/caitlin.jpeg"
          class="rounded-full w-16 h-16"
          alt="Profile Picture"
        ></img>
        <div className="flex flex-col ml-5">
          <div className="flex">
            <ParagraphText className="!text-2xl font-black text-start">
              Milk113
            </ParagraphText>

            <img className="ml-2 w-[20px]" src="./images/star.svg"></img>
          </div>

          <ParagraphText className="!text-[14px]">
            I like fast cars and free stuff
          </ParagraphText>
          {/* Instagram */}
          <div className="mt-5 flex mb-3">
            <a href="https://www.instagram.com/blackpinkofficial/">
              {" "}
              <ParagraphText className="uppercase !text-lg">
                {" "}
                Instagram
              </ParagraphText>
            </a>

            <img className="ml-2" src="./images/arrow-diagonal.svg"></img>
          </div>
        </div>
      </div>
      {/* Achievements */}
      <div className="mt-5 border-b-2">
        <ParagraphText className="uppercase text-start !text-lg">
          Achievements
        </ParagraphText>
        <div className="flex items-center mt-4">
          <img className="w-[40px]" src="./images/star1.svg"></img>
          <ParagraphText className="font-black !text-lg ml-4">
            Top voted post (x5)
          </ParagraphText>
        </div>
        <div className="flex items-center mt-4">
          <img className="w-[40px]" src="./images/star2.svg"></img>
          <ParagraphText className="font-black !text-lg ml-4">
            Most liked comment (x2)
          </ParagraphText>
        </div>
        <div className="flex items-center mt-4">
          <img className="w-[40px]" src="./images/star3.svg"></img>
          <ParagraphText className="font-black !text-lg ml-4">
            Fashionable
          </ParagraphText>
        </div>
        <div className="flex items-center mt-4 mb-8">
          <img className="w-[40px]" src="./images/star4.svg"></img>
          <ParagraphText className="font-black !text-lg ml-4">
            Most unfortunate
          </ParagraphText>
        </div>
      </div>

      {/* Ongoing Responses */}
      <div className="mt-5">
        <ParagraphText className="uppercase !text-[15px] text-start">
          Milk113's Ongoing Responses
        </ParagraphText>
        {/* Post Section*/}
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <ParagraphText className="text-xl leading-[115%] text-start">
              Show us where you and your ex broke up.
            </ParagraphText>
            <a href="/post3">
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
            <div className="flex flex-row w-[100%]">
              <ParagraphText className=" text-slate-400 mr-1">
                By Milk113
              </ParagraphText>
              <img src="./images/star.svg"></img>
            </div>
            {/* right */}
            <div className="flex flex-row w-[100%] justify-end">
              <img className="mr-2" src="./images/location.svg"></img>
              <ParagraphText className="text-slate-400">Richmond</ParagraphText>
            </div>
          </div>

          {/* Picture */}
          <div className="mt-2">
            <div className="relative bg-slate-200 min-h-52 max-h-96 md:max-h-[1000px] rounded-md">
              <img
                className="w-full min-h-52 max-h-96 md:max-h-[1000px] rounded-lg"
                src="./images/break-up1.jpg"
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
                  0
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
    </div>
  );
}
