import { useEffect, useState } from "react";
import { API } from "../const";
import PostTemplateFirebase from "./postTemplateFirebase";
// import PostTemplate1 from "./PostTemplate1";

export default function PromptTemplate() {

    const [prompt, setPrompt] = useState([]);

    const getData = async () => {
        const response = await fetch(API + "/prompt");
        const data = await response.json();
        console.log(data);
        setPrompt(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {
                prompt.map((item, index) => (
                    PostTemplateFirebase({item, index})
                    // <div> </div>
                ))
            }
        </div>
    )
}