import React from "react";

const Button = ({text,isLoading,onBtnClick}) => {
  return (
    <button 
    onClick={onBtnClick}
    disabled ={isLoading?(true):(false)}
    className={`uppercase mt-10 bg-black text-white border border-white hover:text-black hover:bg-white hover:border-black transition-all px-10 py-4
    ${isLoading && ('opacity-60')}
    `}>
     {
        !isLoading ? (text):("Loading...")
     } 
    </button>
  );
};

export default Button;
