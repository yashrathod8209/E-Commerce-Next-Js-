"use client";
import React, { useEffect, useState } from "react";
import Title from "../components/core/Title";
import Category from "../components/filters/category";
import { products } from "../utils/product";
import ProductItem from "../components/ProductItem";
import Type from "../components/filters/Type";

const page = () => {
  const [selectedcategory, setSelectedcategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortType, setSortType] = useState();


  const applyFilter = ()=>{
     let productsCopy=products.slice();
     if(selectedcategory.length > 0){
      productsCopy=productsCopy.filter(item => selectedcategory.includes(item.category));
     }
     if(subCategory.length > 0){
      productsCopy=productsCopy.filter(item => subCategory.includes(item.subCategory));
     }
    setFilteredProducts(productsCopy);
  }


  const sortProducts = () =>{
    let fpCopy=filteredProducts.slice();

    switch(sortType){
      case'low-Heigh':
      setFilteredProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
      break;
      case'Heigh-low':
      setFilteredProducts(fpCopy.sort((a,b)=>(b.price-a.price)));
      break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    setFilteredProducts(products);
  },[])
  useEffect(()=>{
    applyFilter();
  },[selectedcategory,subCategory])
  useEffect(()=>{
    sortProducts();
    console.log(filteredProducts)
  },[sortType])
  return (
    <div className="max-w-[1440px] mx-auto mt-10">
      <div className="grid grid-cols-12">
        <div className="col-span-3 flex flex-col gap-6">
          <h2 className="text-[#343434] uppercase text-2xl font-normal ">
            filters
          </h2>
          <Category
            SelectedCategory={selectedcategory}
            setSelectedCategory={setSelectedcategory}
          />
          <Type
            SelectedType={subCategory}
            setSelectedType={setSubCategory}
          />
        </div>
        <div className="col-span-9">
          <div className="flex justify-between">
            <Title text1={"All"} text2={" Collections"} />
            <div className="border border-[#c8c8c8] w-xs h-12 flex items-center p-1.5 ">
              <p className="text-gray-400 w-[70px]">
                Sort by:
              </p>
              <select name="" id="" className="w-full outline-0" onChange={(e)=>setSortType(e.target.value)}>
                <option value="relavent">relavent</option>
                <option value="low-Heigh">low-Heigh</option>
                <option value="Heigh-low">Heigh-low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3.5">
            {filteredProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
