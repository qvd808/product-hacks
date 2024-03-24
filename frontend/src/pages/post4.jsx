import { useEffect, useState } from "react";
import { ParagraphText, SectionHeader } from "../components/Common";
import PostTemplate from "../components/postTemplate";
import PromptTemplate from "../components/promptTemplate";
import { API, data } from "../const";
import { useSearchParams } from "react-router-dom";
// import Link from "next/link";

const topic = "Something you're proud of this week";

export default function Post4() {
  const [prompts, setPrompts] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

  const getData = async () => {
    const response = await fetch(API + "/prompt");
    const data = await response.json();
    setPrompts(data);
    setPrompts(data.filter((prompt) => prompt.id === "prompt-4"));
    // console.log(prompts);
  };

  useEffect(() => {
    getData();
    setSearchParams({
      id: "prompt-4",
      topic: topic,
    });
  }, []);

  return (
    <main className=" min-h-screen flex-col  p-[5%] bg-white mb-32">
      {/* Header */}
      <div className="flex justify-between">
        {/* left */}
        <SectionHeader className="text-dmsans italic !text-[#5D5AFF] uppercase  font-bold ">
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
        <ParagraphText className="!text-3xl text-start leading-[115%]">
          {topic}
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
      </div>
      {/* {data.prompts[0].post.map((item, index) => PostTemplate({ item, index }))} */}
      {prompts.map((singlePost) => {
        return (
          <div>
            {singlePost.posts
              .sort((a, b) => a.vote < b.vote)
              .map((post, index) =>
                PostTemplate({ item: post, index, singlePost })
              )}
          </div>
        );
      })}
    </main>
  );
}
