import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className= 'max-w-[1440px] mx-auto grid grid-cols-1 mt-36 sm:grid-cols-2 mb-4'>
      <div className="flex justify-center flex-col sm:block ">
        <Link href={"/"} className=''><img src="/assets/images/logo.svg" alt="" className='mx-auto mb-4'/> </Link>
        <p className="text-center mx-auto sm:mr-auto sm:text-left max-w-[80%] text-[#595959]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-3.5">
        <ul className='flex gap-5 justify-center sm:block text-[#595959]'>
          <h5 className='uppercase hidden sm:block mb-4 text-[#5A5A5A] text-xl'>company</h5>
          <li><Link href="#">Home</Link></li>
          <li><Link href="#">About us</Link></li>
          <li><Link href="#">Delivery</Link></li>
          <li><Link href="#">Privacy Policy</Link></li>
        </ul>
        <ul className='flex gap-5 justify-center sm:block text-[#595959]'>
          <h5 className='uppercase hidden  sm:block mb-4 text-[#5A5A5A] text-xl'>get in touch</h5>
          <li><Link href="#">+1-212-456-7890</Link></li>
          <li><Link href="#">greatstackdev@gmail.com</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
