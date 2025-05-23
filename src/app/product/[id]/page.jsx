"use client";
import React, { use, useEffect, useState } from "react";
import { products } from "@/app/utils/product";
import Rating from "@/app/components/core/Rating";
import ReviAndDesc from '@/app/components/reviAndDesc'
import RelatedProducts from "@/app/components/RelatedProducts";
import Button from "@/app/components/core/Button";
import { useDispatch } from "react-redux";
import { add } from "@/store/cart";

const product = ({ params }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedImg, setSelectedImg] = useState();
  const [selectedColor, setSelectedColor] = useState("");
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState();
  const productId = use(params).id;
  const dispatch = useDispatch()
  // console.log(typeof(productId))

  const addToCart = ()=>{
    console.log("added")
    const producttosave = {
    id:product.id,
    name:product.name,
    img:selectedImg,
    price:product.price,
    color:selectedColor,
    size:selectedSize
    }
    dispatch(add(producttosave));
    console.log("added")
  }
  

    const findRelated = async(findedProduct)=>{
      const shorted = products.filter((product)=>product.category == findedProduct.category);
      console.log(shorted)
    } 

  useEffect(() => {
    setIsLoading(true);
    const findedProduct = products.find((product) => product.id == productId);
    setProduct(findedProduct);
    console.log(findedProduct);
    console.log(product);
    findRelated(findedProduct)
    setSelectedImg(findedProduct.images[0]);
    setSelectedColor(findedProduct.colors[0])
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading ? (
        <h1 className="text-4xl  text-center my-9">Loading...</h1>
      ) : (
        <div className="max-w-[1440px] mx-auto ">
          <div className="grid grid-cols-2 py-7">
            <div className="grid grid-cols-12 col-span-1 px-5 ">
              <div className="col-span-2 flex flex-col gap-3">
                {product.images.map((img, index) => (
                  <img 
                  onMouseEnter={()=>setSelectedImg(img)}
                  // onClick={()=>setSelectedImg(img)}
                  key={index} 
                  src={img} 
                  className={`w-[100px] p-1  border-2  ${selectedImg == img ? (' border-blue-400'):('border-transparent') }`} />
                ))}
              </div>
              <div className="col-span-9 px-7">
                <img src={selectedImg} className="object-fill w-full" />
              </div>
            </div>
            <div className="col-span-1">
              <div className="">
                <h1 className="font-medium text-[34px]">{product.name}</h1>
                <div className="flex gap-1.5">
                <Rating rating={product.rating} />
                  <p className="font-normal text-base">(122)</p>
                </div>
                <div className="">
                  <h3 className="font-medium text-[32px]">${product.price}</h3>
                  <p
                      className="font-normal text-base text-[#555555]"
                    >
                      {product.description[0]}
                    </p>
                </div>
                <div className="mt-8">
                  <h3 className="font-semibold mt-8 text-xl text-[#656565]">
                    Select Size
                  </h3>
                  <div className="flex gap-1.5 mt-4 ">
                    {/* <label htmlFor=""> */}
                    {product.sizes.map((size, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setSelectedSize(size);
                          console.log(selectedSize);
                        }}
                        className={`group px-4 py-2.5 border-2 bg-[#FBFBFB] cursor-pointer ${
                          selectedSize == size
                            ? "border-[#FF8551]"
                            : "border-[#d3d3d3]"
                        }  `}
                      >
                        <h4 className="text-[#1D1D1D] text-base font-normal">
                          {size}
                        </h4>
                        <input
                          type="radio"
                          name="size"
                          id="2"
                          value={size}
                          className="hidden group"
                        />
                      </div>
                    ))}
                    {/* </label> */}
                  </div>
                  <h3 className="font-semibold mt-8 text-xl text-[#656565]">
                    Select Size
                  </h3>
                  <div className="flex gap-1.5 mt-4">
                    {/* <label htmlFor=""> */}
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setSelectedColor(color);
                          console.log(selectedColor);
                        }}
                        className={`bg-[${color}] group px-2.5 py-2.5  border-2  cursor-pointer bg-gray-200 ${
                          selectedColor == color
                            ? "border-black"
                            : "border-[#d3d3d3]"
                        }  `}
                      >
                        <input
                          type="radio"
                          name="size"
                          id="2"
                          value={color}
                          className="hidden group"
                        />
                        <div
                          style={{ backgroundColor: color }}
                          className=" h-9 w-9"
                        ></div>
                      </div>
                    ))}
                    {/* </label> */}
                  </div>
                    <Button onBtnClick={addToCart} text={"add to cart"} isLoading={false} />

                  <div className="h-[1px] my-5 bg-[#ADADAD] w-3/4"></div>
                  <div className="">
                    <p className="font-normal text-base text-[#555555]">
                      100% Original product.
                    </p>
                    <p className="font-normal text-base text-[#555555]">
                      Cash on delivery is available on this product.
                    </p>
                    <p className="font-normal text-base text-[#555555]">
                      Easy return and exchange policy within 7 days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ReviAndDesc reviews={product.reviews} description={product.description} />
          {/* <div className="">
            <div className="">
              <button className="px-4 py-1.5 font-bold text-base text-[#393939] border border-[#D0D0D0] bg-white">
                Description
              </button>
              <button className="px-4 py-1.5 font-bold text-base text-[#898989] border border-[#D0D0D0] bg-[#FBFBFB]">
                Reviews (122)
              </button>
            </div>
            <div className="border border-[#D0D0D0] px-5 py-7 flex flex-col gap-2">
              {product.reviews.map((review, index) => (
                <div key={index}
                className="bg-[#fbfbfb] p-2.5"
                >
                  <div className="flex gap-2.5 ">
                  <h3 className="text-xl">{review.user}</h3>
                    <Rating rating={review.rating} />
                    </div>
                  <p>Comment : {review.comment}</p>
                </div>
              ))}
            </div>
            <div className="border border-[#D0D0D0] px-5 py-7 flex flex-col gap-2">
              {product.description.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          </div> */}
          <div className="">
            <RelatedProducts currentProductId={product.id} category={product.category}/>
          </div>
        </div>
      )}
    </>
  );
};

export default product;
