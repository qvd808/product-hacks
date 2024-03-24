// BottomNavigationBar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ParagraphText, SectionHeader } from "./components/Common";
import { useEffect, useState } from "react";

const BottomNavigationBar = () => {
  const locat = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any necessary actions with the selected file here
    console.log(selectedFile);
  };

  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="">
      <button onClick={openPopup}>
        {" "}
        {locat.pathname === "/post" || "/post2" ? (
          <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {" "}
            <div className="flex justify-center items-center w-[300px] h-[40px] bg-[#5D5AFF] rounded-lg">
              <ParagraphText className=" !text-lg font-bold text-white text-center">
                Post a Response
              </ParagraphText>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-10 rounded-md">
            <div className="flex flex-col">
              <form className="" onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <div className="bg-[#F1F1F1] mt-5 rounded-md">
                  <input
                    className="w-full h-[40px] pl-2 bg-[#F1F1F1] rounded-md"
                    type="text"
                    placeholder="Caption"
                    value={caption}
                    onChange={handleCaptionChange}
                  />
                </div>
                <div className="bg-[#F1F1F1] mt-5 rounded-md">
                  <input
                    className="w-full h-[40px]  pl-2 bg-[#F1F1F1] rounded-md"
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={handleLocationChange}
                  />
                </div>
                <div className="flex justify-between m-12">
                  <div className="bg-[#5D5AFF] py-2 px-3 rounded-md">
                    {" "}
                    <button className="text-white" type="submit">
                      Upload
                    </button>
                  </div>

                  <div className="bg-black py-2 px-3 rounded-md">
                    <button className="text-white" onClick={closePopup}>
                      Close
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}{" "}
      {locat.pathname === "/search" ? (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {" "}
          <div className="flex justify-center items-center w-[300px] h-[40px] bg-[#5D5AFF] rounded-lg">
            <ParagraphText className=" !text-lg font-bold text-white text-center">
              Create a prompt
            </ParagraphText>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <nav className=" bg-white text-black py-4 text-center fixed bottom-0 w-full border-t-2 shadow-sm">
        <ul className="flex justify-between px-20 py-2">
          <li>
            {locat.pathname === "/" ? (
              <img src="./images/fire-active.svg"></img>
            ) : (
              <Link to="/">
                {" "}
                <img src="./images/fire-black.svg"></img>
              </Link>
            )}
          </li>
          <li>
            {locat.pathname === "/search" ? (
              <img src="./images/search-active.svg"></img>
            ) : (
              <Link to="/search">
                <img src="./images/search-black.svg"></img>
              </Link>
            )}
          </li>
          <li>
            {locat.pathname === "/notification" ? (
              <img src="./images/bell-active.svg"></img>
            ) : (
              <Link to="/notification">
                {" "}
                <img src="./images/bell-black.svg"></img>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNavigationBar;
