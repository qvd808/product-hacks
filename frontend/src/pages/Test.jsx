import React, { useEffect, useState } from "react";
import { ParagraphText, SectionHeader } from "../components/Common";
import { data } from "../const";

const API = "https://us-central1-product-hack-2024.cloudfunctions.net/app";

export default function Test() {
  let prompt1 = data[0];
  console.log(data);

  return (
    <div>
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <ParagraphText className="!text-3xl leading-[115%] text-start">
            {`${data.prompts[0].topic}`}
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
          <div className="flex flex-row w-[100%]">
            <ParagraphText className=" text-slate-400 mr-1">
              {`${data.prompts[0].post[0].user}`}
            </ParagraphText>
            <img src="./images/star.svg"></img>
          </div>
          {/* right */}
          <div className="flex flex-row w-[100%]">
            <img className="mr-2" src="./images/location.svg"></img>
            <ParagraphText className="text-slate-400">
              {`${data.prompts[0].post[0].location}`}
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
    </div>
  );
}
