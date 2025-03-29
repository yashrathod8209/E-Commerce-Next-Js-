"use client"
import React, { useEffect, useState } from 'react'
import Title from './core/Title'
import ProductItem from './ProductItem'
import { products } from '../utils/product'

const LatestCollection = () => {
  const [latestProducts,setlatestProducts] =useState();
  useEffect(()=>{
    setlatestProducts(
      products.slice(0,10)
    )
  },[])
  return (
    <div className='my-10 '>
        <div className="text-center py-8 text-3xl">
            <Title  text1={'latest'} text2={'collections'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 '>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
            </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
            {products.map((item,index)=>(
              <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
            ))
            
            }
        </div>
    </div>
  )
}

export default LatestCollection
