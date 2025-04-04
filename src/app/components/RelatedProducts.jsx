import React, { useEffect, useState } from 'react'
import Title from './core/Title'
import ProductItem from './ProductItem'
import { products } from '../utils/product';


const RelatedProducts = ({category,currentProductId}) => {
    const [relatedProducts,setRelatedProducts] = useState();
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        setIsLoading(true);
        const relatedProducts = products.filter((product)=>product.category == category && product.id !== currentProductId).slice(0,10);
        console.log(relatedProducts)
        setRelatedProducts(relatedProducts);
        setIsLoading(false);
    },[])

  return (
    <div className='text-center mt-16'>
        <Title text1={"Related"} text2={"Products"} />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">

        {isLoading ? (<h1>Loading....</h1>) :
              relatedProducts.map((item,index)=>(
                  <ProductItem key={index} id={item.id} image={item.images[0]} name={item.name} price={item.price}/>
                ))
            }
            </div>
    </div>  
  )
}

export default RelatedProducts
