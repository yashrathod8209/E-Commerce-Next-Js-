"use client"
import React, { useEffect, useState } from "react";
import Title from "../components/core/Title";
import { useSelector } from "react-redux";

const Cart = () => {
  const [quantity,setQuantity]=useState()
  const [Loading,setLoading]=useState(false)
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="mt-10">
        <Title text1={"your"} text2={"CART"} />
        <div className="">
          <div className="bg-[#D1D1D1] h-[1px] w-full"></div>
          {Loading ? (<h1>Loading...</h1>):(
cartItems.map((item,index)=>(
<div key={index} className="py-4 border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
            <div className="flex items-start gap-6">
            <img src={item.img} alt="" className="w-16 sm:w-20 "/>
            <div className="">
                <p className="text-xs sm:text-lg font-medium">{item.name}</p>
                <div className="flex items-center gap-5 mt-2">
                    <p>${item.price}</p>
                    <p className=" px-2 sm:px-3 sm:py-1 grid-cols-1 bg-slate-50 border ">
                        {item.size}
                </p>
                </div>
            </div>
            </div>
            <div className="bg-[#FBFBFB] max-w-20 sm:max-w-28 border border-[#dfdfdf] text-2xl flex justify-center items-center rounded-4xl">
                    <button 
                    onClick={()=>setQuantity(quantity+1)}
                    className="text-2xl hover:scale-110  w-12 h-12 cursor-pointer">+</button>
                    <p className="text-2xl border bg-white border-[#dfdfdf] w-12 h-12 text-center content-center">5</p>
                    <button className="text-2xl  w-12 h-12 hover:scale-125 cursor-pointer">-</button>
            </div>
            <button className="cursor-pointer hover:scale-110 ">
            <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#404040"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
            </button>
          </div>
))
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Cart;
