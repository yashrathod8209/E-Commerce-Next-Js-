import React from 'react'

const Category = ({SelectedCategory,setSelectedCategory}) => {
  const handleCategory = (category)=>{  
    setSelectedCategory((prev)=>
    prev.includes(category) ? prev.filter((c)=> c !== category) : [...prev,category]);
    console.log(SelectedCategory)
  }

    const categories = ["Men","Women","Kids"];
  return (
    <div className='border border-[#c8c8c8] p-4 mr-11' >
    <h3 className='uppercase font-medium text-sm'>categories</h3>
    <ul>
        {categories.map((category,index)=>(
        <li key={index} className='flex gap-3.5 pl-2.5'>
            <input type="checkbox" className='w-3' onChange={()=>handleCategory(category)} name={category} id="" /> 
            <p className='font-light text-base'>{category}</p>
        </li>
        ))}
    </ul>
    </div>
  )
}

export default Category
