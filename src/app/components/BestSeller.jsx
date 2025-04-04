"use client"
import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import Title from './core/Title'
import { products } from '../utils/product'

const BestSeller = () => {
  const [bestseller,setbestseller] =useState();
  const [isLoading,setisLoading] =useState(true);


  useEffect(()=>{
    try{
      setisLoading(true);
      const bestProducts = products.filter((product)=>(product.bestseller));
      setbestseller(bestProducts.slice(0,5))
      setisLoading(false);
    }catch(err){
      console.log(err);
    }finally{
      setisLoading(false)
    }
    },[])
  return (
    <div className='my-10 '>
        <div className="text-center py-8 text-3xl">
            <Title  text1={'best'} text2={'seller'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 '>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
            </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
            {isLoading ? (<h1>Loading....</h1>) :
              bestseller.map((item,index)=>(
                <ProductItem key={index} id={item.id} image={item.images[0]} name={item.name} price={item.price}/>
              ))
            }
        </div>
    </div>
  )
}

export default BestSeller
