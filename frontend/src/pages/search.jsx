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
        <ParagraphText className="!text-lg uppercase font-bold text-start">
          Discover Prompts
        </ParagraphText>
      </div>
      {/* Search Section */}
      <div className="w-[100%] mt-5  bg-slate-200">
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
    </div>
  );
}
