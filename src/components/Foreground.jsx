import React, {useRef} from "react";
import Card from "./Card";

const Foreground = () => {

    const ref = useRef(null)

    const data = [
        {
            desc: "Des display",
            fileSize: ".9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
        },
        {
            desc: "Des display",
            fileSize: ".9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"}
        },
        {
            desc: "Des display",
            fileSize: ".9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
        }
    ]
  return (
  
  <div ref={ref} className=" fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-10">
    {data.map((item, index)=> (
        <Card data={item} reference = {ref} key={index}/>
    ))}
  </div>
  )
};

export default Foreground;
