"use client"
import React from 'react'

const NewsLatterBox = () => {
    const subscribehandle =(e)=>{
        e.preventDefault();
    }
  return (
    <div className='text-center '>
        <h3 className='text-[28px] sm:text-4xl font-medium'>Subscribe now & get 20% off</h3>
        <p className='text-base sm:text-lg font-normal text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <form className='w-full sm:w-1/2 flex items-center border border-gray-400 gap-3 mx-auto my-6 pl-3'>
            <input type="email"  placeholder='Enter your email id' className='outline-0 w-full sm:flex-1' />
            <button onClick={subscribehandle} className='uppercase bg-black text-white border border-white hover:text-black hover:bg-white hover:border-black transition-all px-10 py-4'>subscribe</button>
        </form>
    </div>
  )
}

export default NewsLatterBox
