import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <h1 className="text-gray-500 text-[35px] uppercase">
        {text1}
        <span className="text-gray-700 pl-1">
            {text2}
        </span>
      </h1>
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
    </div>
  );
};

export default Title;
