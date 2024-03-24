import { ParagraphText, SectionHeader } from "../components/Common";

const dataToday = [
  {
    message: "Your response to Locking in is currently trending with 49 votes",
    image: "./images/o.jpg",
  },
  {
    message:
      "Your response to Show us where you and your ex broke up is currently the top-voted response",
    image: "./images/o.jpg",
  },
  {
    message: "Vikes liked your comment: This place has free parking",
    image: "./images/o.jpg",
  },
  {
    message: "Gavin23 commented: Nah this is vile",
    image: "./images/o.jpg",
  },
];
const dataYesterday = [
  {
    message:
      "Your response to Show us where you and your ex broke up is currently the top-voted response",
    image: "./images/o.jpg",
  },
  {
    message: "Gavin23 commented: Nah this is vile",
    image: "./images/o.jpg",
  },
  {
    message: "Vikes liked your comment: This place has free parking",
    image: "./images/o.jpg",
  },
  {
    message: "Gavin23 commented: Nah this is vile",
    image: "./images/o.jpg",
  },
];
export default function Notification() {
  return (
    <div className="min-h-screen flex-col bg-[#F1F1F1] mb-10">
      <div className=" p-[5%] bg-white">
        {/* Header */}
        <div className="flex justify-between">
          {/* left */}
          <SectionHeader className="text-dmsans italic !text-[#5D5AFF]  uppercase  font-bold ">
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
        <ParagraphText className="!text-xl uppercase font-black text-start mt-5">
          Notifications
        </ParagraphText>
        <div>
          <div className="bg-[#5D5AFF] rounded-md py-1 px-2 w-[20%] my-5">
            <ParagraphText className="uppercase text-white font-semibold ">
              Today
            </ParagraphText>
          </div>
        </div>
        {dataToday.map((item) => (
          <div className="border-b-2 pb-3 mt-3">
            <div className="flex">
              <div className="w-3/4 text-sm text-left">{item.message}</div>
              <div className="rounded-lg">
                {" "}
                <img
                  className="w-[98px] h-[63px] rounded-md"
                  src={item.image}
                ></img>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#F1F1F1] mt-3 p-[5%]">
        <div className="bg-[#5D5AFF] py-1 px-2 w-[30%] rounded-md ">
          <ParagraphText className="uppercase text-white font-semibold !text-[15px]">
            Yesterday
          </ParagraphText>
        </div>
        {dataYesterday.map((item) => (
          <div className="border-b-2 pb-3 mt-3">
            <div className="flex">
              <div className="w-3/4 text-sm text-left">{item.message}</div>
              <div className="rounded-lg">
                {" "}
                <img
                  className="w-[98px] h-[63px] rounded-md"
                  src={item.image}
                ></img>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
