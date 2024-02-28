/* eslint-disable react/prop-types */
// import React from "react";
import { motion } from "framer-motion";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaDownload } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10}}
      className=" relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden "
    >
      <LuFileSpreadsheet />
      <p className="text-sm  leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between  px-8 py-3 mb-3">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoCloseCircleOutline />
            ) : (
              <FaDownload size=".7em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
