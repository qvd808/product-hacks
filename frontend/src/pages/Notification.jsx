import { ParagraphText } from "../components/Common";

const data = [
  {
    date: "today",
    notifications: [
      {
        message:
          "Your response to Locking in is currently trending with 49 votes",
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
    ],
  },
  {
    date: "yesterday",
    notifications: [
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
    ],
  },
];

export default function Notification() {
  return (
    <div>
      <div className="min-h-screen flex-col  p-[5%] bg-white flex items-start">
        <ParagraphText className="font-bold my-2 px-3 uppercase">
          Notifications
        </ParagraphText>
        {data.map((item) => (
          <div className={item.date === "today" ? "bg-white" : "bg-[#F9F9F9]"}>
            <div className="bg-[#5D5AFF] bg-auto w-1/4 rounded-md m-3 px-2">
              <ParagraphText
                className= "text-white m-0 py-1 px-1 rounded-md uppercase"

              >
                {item.date}
              </ParagraphText>
            </div>

            {item.notifications.map((notification, idx) => (
              <div
                className={
                  idx !== item.notifications.length - 1
                    ? "flex flex-row mx-3 my-2 py-2 border-b-2"
                    : "flex flex-row mx-3 my-2 py-2"
                }
              >
                <div className="w-3/4 text-sm text-left">
                  {notification.message}
                </div>
                <img
                  className="w-[98px] h-[63px] rounded-sm"
                  src={notification.image}
                ></img>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
