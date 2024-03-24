import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ParagraphText, SectionHeader } from "../components/Common";
export default function Search() {
  // Define state to manage the input value
  const [inputValue, setInputValue] = useState("");

  // Event handler to update the input value
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="p-[5%] mb-20">
      {/* Header */}
      <div className="flex justify-between">
        {/* left */}
        <SectionHeader className="text-dmsans italic text-[#5D5AFF] uppercase text-black font-bold ">
          Clik
        </SectionHeader>
        {/* right */}
        <div>
          <a href="/profile">
            {" "}
            <div>
              <img src="./images/user.svg"></img>
            </div>
          </a>
        </div>
      </div>
      {/*  Subheader*/}
      <div className="mt-5">
        <ParagraphText className="!text-lg uppercase font-black text-start">
          Discover Prompts
        </ParagraphText>
      </div>
      {/* Search Section */}
      <div className="w-[100%] mt-2 bg-[#F1F1F1] flex p-2 rounded-md">
        {" "}
        <img className="" src="./images/search-grey.svg"></img>
        <input
          className="w-full pl-2 bg-[#F1F1F1]"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          //   placeholder="Enter text..."
        />
      </div>
      {/* Ongoing Header */}
      <div className="mt-5">
        {" "}
        <ParagraphText className="!text-[14px] uppercase text-start ">
          Ongoing
        </ParagraphText>
      </div>
      {/* Prompt Card */}
      <div className="flex border-t-2 border-b-2 mt-1 justify-between">
        <div className="flex">
          <div className="flex mr-3">
            <img
              className="w-[20pt] self-start"
              src="./images/arrow-up-circle.svg"
            ></img>
            <ParagraphText className="!text-[11pt] text-bold self-start mt-1">
              12
            </ParagraphText>
          </div>

          <div className=" flex flex-col">
            {" "}
            <ParagraphText className="!text-lg text-start">
              Locking in
            </ParagraphText>
            <ParagraphText className="!text-md text-start">
              Closes in 4 days
            </ParagraphText>
          </div>
        </div>

        <img className="" src="./images/chevron-right-black.svg"></img>
      </div>
      {/*  */}
      <div className="mt-10">
        <ParagraphText className="uppercase font-semibold !text-lg text-start">
          Past top responses
        </ParagraphText>
        {/* Post Section*/}
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <ParagraphText className="text-xl leading-[115%] text-start">
              The craziest things you can do with $5.50 CAD.
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
            <div className="flex flex-row w-[100%]">
              <ParagraphText className=" text-slate-400 mr-1">
                By BabyBottom
              </ParagraphText>
              <img src="./images/star.svg"></img>
            </div>
            {/* right */}
            <div className="flex flex-row w-[100%] justify-end">
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
    </div>
  );
}
