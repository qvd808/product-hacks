import React from "react";
import { ParagraphText, SectionHeader } from "../components/Common";
// import Link from "next/link";
import { API } from "../const";

const PostTemplate = (props) => {
  const upVote = async (id, postId) => {
    await fetch(API + "/post/up-vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, postId: postId }),
    });
    window.location.reload();
  };

  const downVote = async (id, postId) => {
    await fetch(API + "/post/down-vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, postId: postId }),
    });
    window.location.reload();
  };

  return (
    <div className="mt-3 " key={props.index}>
      {/* Post Section*/}
      {/* User + location */}
      <div className="mt-5 flex justify-between">
        {/* left */}
        <div className="flex">
          <ParagraphText className="text-slate-400 mr-1">
            {props.item.user}
          </ParagraphText>
          <img src="./images/star.svg"></img>
        </div>
        {/* right */}
        <div className="flex">
          <img className="mr-2" src="./images/location.svg"></img>
          <ParagraphText className="text-slate-400">
            {props.item.location}
          </ParagraphText>
        </div>
      </div>

      {/* Picture */}
      <div className="mt-2">
        <div className="relative bg-slate-200 min-h-52 max-h-96 md:max-h-[1000px] rounded-md">
          <img
            className="w-full min-h-52 max-h-96 md:max-h-[1000px] rounded-lg"
            src={props.item.image}
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
              <img
                onClick={() => {
                  upVote(props.singlePost.id, props.item.id);
                  // console.log(props.singlePost.id, props.item.id)
                }}
                className="hover:scale-150"
                src="./images/arrow-up-circle.svg"
              ></img>
            </div>
            <ParagraphText className="text-lg text-white font-normal mt-6">
              {props.item.vote}
            </ParagraphText>
            <div className="mt-6">
              <img
                onClick={() => {
                  downVote(props.singlePost.id, props.item.id);
                  // console.log(props.singlePost.id, props.item.id)
                }}
                className="hover:scale-150"
                src="./images/arrow-down-circle.svg"
              ></img>
            </div>
          </div>
        </div>
      </div>
      {/* Caption */}
      <div className="flex justify-between mt-2 ml-2">
        {/* left */}
        <div>
          <ParagraphText className="text-md">
            {props.item.caption}
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
  );
};

export default PostTemplate;
