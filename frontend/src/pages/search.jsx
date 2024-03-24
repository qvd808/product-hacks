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
    <div className="p-[5%]">
      {/* Header */}
      <div className="flex justify-between">
        {/* left */}
        <SectionHeader className="text-dmsans italic uppercase text-black font-bold ">
          Clik
        </SectionHeader>
        {/* right */}
        <div>
          <img src="./images/user.svg"></img>
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
      <div className="flex border-t-2 border-b-2 mt-1">
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
    </div>
  );
}
