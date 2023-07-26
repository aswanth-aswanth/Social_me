import React from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import styles from "../styles/homepage.module.css"
function Stories() {
  return (
    <>
      <h3 className="ml-20 text-2xl mt-2">Stories</h3>
      <div className=" h-min flex items-center  ">
        <ControlPointIcon
          style={{ marginLeft: "20px", fontSize: "2.5rem", color: "#9A9A9A" }}
        />
        <div className={`${styles.story_container} story_container flex    w-[90%] max-w-[800px] mx-auto overflow-x-scroll pt-10 pb-8`}>
          <div className="story  mx-6 w-[160px] h-[200px] bg-white rounded-2xl relative flex-shrink-0">
            <div className="circle w-[55px] h-[55px] border bg-white rounded-full absolute top-[-30px] left-[50px]"></div>
          </div>
          <div className="story  mx-6 w-[160px] h-[200px] bg-white rounded-2xl relative flex-shrink-0">
            <div className="circle w-[55px] h-[55px] border bg-white rounded-full absolute top-[-30px] left-[50px]"></div>
          </div>
          <div className="story  mx-6 w-[160px] h-[200px] bg-white rounded-2xl relative flex-shrink-0">
            <div className="circle w-[55px] h-[55px] border bg-white rounded-full absolute top-[-30px] left-[50px]"></div>
          </div>
          <div className="story  mx-6 w-[160px] h-[200px] bg-white rounded-2xl relative flex-shrink-0">
            <div className="circle w-[55px] h-[55px] border bg-white rounded-full absolute top-[-30px] left-[50px]"></div>
          </div>
          <div className="story  mx-6 w-[160px] h-[200px] bg-white rounded-2xl relative flex-shrink-0">
            <div className="circle w-[55px] h-[55px] border bg-white rounded-full absolute top-[-30px] left-[50px]"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stories;
