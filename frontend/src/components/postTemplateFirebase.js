import React, { useEffect } from "react";
import { ParagraphText, SectionHeader } from "./Common";
// import Link from "next/link";
import { useState } from "react";
import { API } from "../const";

const PostTemplateFirebase = (props) => {
  // console.log(props.item)
  const [data, setData] = useState([]);

  const getData = async () => {
    // const response = await fetch(API + `/post?id=${props.item.id}`);
    // const data = await response.json();
    // setData(data);
    // console.log(data);
  }

  // useEffect(() => {
  //   getData();
  // }, [data]);

  return (
    <div className="mt-3 " key={props.index}>
    
    </div>
  );
};

export default PostTemplateFirebase;
