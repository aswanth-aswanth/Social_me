import React from "react";

function Post() {
  return (
    <div className=" my-8">
      <div className="bg-white min-h-[200px] mx-3 p-6 rounded-2xl">
        <dir className="flex  items-start pl-0 my-0">
          <div className="circle rounded-full  border w-[60px] h-[60px]"></div>
          <div className="userdetails ml-4 text-[#808080]">
            <p className="username text-sm ">Username</p>
            <p className="timeago text-xs">1 day ago</p>
          </div>
        </dir>
        <div className="text-[#A2A2A2] text-sm mt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            explicabo.
          </p>
        </div>
        <div className="image bg-gray-200 rounded-2xl h-[200px] w-full mt-4"></div>
      </div>
    </div>
  );
}

export default Post;
