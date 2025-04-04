"use client"

import React, { useState } from 'react'
import Rating from './core/Rating'

const reviAndDesc = ({description,reviews}) => {
    const [show,setShow]=useState("description");

  return (
    <>
            <div className="">
              <button 
              onClick={()=>setShow("description")}
              className={`px-4 py-1.5 font-bold text-base  border border-[#D0D0D0] cursor-pointer ${show === "description" ? ('text-[#393939] bg-white'):('text-[#898989] bg-[#FBFBFB]')} `}>
                Description
              </button>
              <button
               onClick={()=>setShow("reviws")}
              className={`px-4 py-1.5 font-bold text-base  border border-[#D0D0D0] cursor-pointer ${show === "reviws" ? ('text-[#393939] bg-white'):('text-[#898989] bg-[#FBFBFB]')}  `}>
                Reviews (122)
              </button>
            </div>
            <div className="border border-[#D0D0D0] px-5 py-7 flex flex-col gap-2">
                {
                    show === "description" ? (
                      description.map((desc, index) => (
                        <p key={index}>{desc}</p>
                      ))
                        
                    ):(
                      reviews.map((review, index) => (
                        <div key={index}
                        className="bg-[#fbfbfb] p-2.5"
                        >
                          <div className="flex gap-2.5 ">
                          <h3 className="text-xl">{review.user}</h3>
                            <Rating rating={review.rating} />
                            </div>
                          <p>Comment : {review.comment}</p>
                        </div>
                      ))
                    )
                }
              
            </div>
          </>
  )
}

export default reviAndDesc
