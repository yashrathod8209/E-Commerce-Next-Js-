import React from 'react'

const Type = ({SelectedType,setSelectedType}) => {
    const types = ["Topwear","Bottomwear","Winterwear"];
    const handleCategory = (type)=>{  
        setSelectedType((prev)=>
        prev.includes(type) ? prev.filter((t)=> t !== type) : [...prev,type]);
        console.log(SelectedType)
      }
    
  return (
    <div className='border border-[#c8c8c8] p-4 mr-11' >
    <h3 className='uppercase'>TYPE</h3>
    <ul>
        {types.map((type,index)=>(
        <li key={index} className='flex gap-3.5 pl-2.5'>
            <input type="checkbox" onChange={()=>handleCategory(type)} name={type} id="" /> 
            <p className='font-light text-base'>{type}</p>
        </li>
        ))}
    </ul>
    </div>
  )
}

export default Type
