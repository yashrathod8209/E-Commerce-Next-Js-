"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { assets } from "../../../public/assets/assets";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="mx-auto max-w-[1440px] border-b border-gray-400">
      <div className="flex items-center justify-between py-4">
        <div className="">
          {/* <img src={images.logo} alt="" /> */}
          <svg
            width="166"
            height="47"
            viewBox="0 0 166 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.8418 35.9551V4.55469H18.1934V8.41797H5.75V18.3906H13.9707V22.2988H5.75V35.9551H1.8418ZM21.4277 27.2402V12.4609C21.4277 10.8737 22.1016 9.25651 23.4492 7.60938C25.2461 5.45312 27.5221 4.36003 30.2773 4.33008V8.23828C28.4505 8.23828 27.028 9.16667 26.0098 11.0234C25.5905 11.832 25.3809 12.5508 25.3809 13.1797V27.2402C25.3809 29.127 26.3092 30.5944 28.166 31.6426C28.9447 32.0918 29.6335 32.3164 30.2324 32.3164V36.2246C28.5254 36.2246 26.8184 35.6107 25.1113 34.3828C22.6855 32.5859 21.4577 30.2051 21.4277 27.2402ZM32.7031 36.2246V32.3164C33.7513 32.3164 34.8145 31.8522 35.8926 30.9238C37.0306 29.9056 37.6146 28.6777 37.6445 27.2402V13.1797C37.6445 12.0117 37.1654 10.8887 36.207 9.81055C35.2188 8.79232 34.0508 8.26823 32.7031 8.23828V4.33008C35.7279 4.33008 38.1536 5.63281 39.9805 8.23828C41.0286 9.73568 41.5527 11.1432 41.5527 12.4609V27.2402C41.5527 30.5645 40.0703 33.11 37.1055 34.877C35.5482 35.7754 34.0807 36.2246 32.7031 36.2246ZM45.1914 36V4.55469H49.0996V36H45.1914ZM51.3457 22.3887V18.8398H55.4336C58.6081 18.7799 60.2103 17.013 60.2402 13.5391C60.1803 9.97526 58.3685 8.17839 54.8047 8.14844H51.3457V4.55469H55.5234C59.8659 4.70443 62.5462 6.51628 63.5645 9.99023C63.8639 10.9785 64.0137 12.0566 64.0137 13.2246C63.9837 16.6986 62.9505 19.1393 60.9141 20.5469C62.651 21.4753 63.6992 23.1673 64.0586 25.623C64.0885 25.8327 64.1185 26.0423 64.1484 26.252L64.9121 36H61.2285L60.5547 28.0039C60.3151 25.4284 59.6562 23.7812 58.5781 23.0625C57.8594 22.5833 56.8861 22.3587 55.6582 22.3887H51.3457ZM67.9219 36V4.55469H84.2734V8.41797H71.8301V18.3906H80.0508V22.2988H71.8301V32.1367H84.2734V36H67.9219ZM86.4297 4.55469H90.3828L98.3789 31.8672L96.9414 36H95.5488L86.4297 4.55469ZM97.3906 21.2207L102.961 4.55469H106.914C106.645 5.42318 105.521 8.89714 103.545 14.9766C101.239 22.0443 99.9212 26.1022 99.5918 27.1504H99.1426L97.3906 21.2207ZM109.16 36V4.55469H125.512V8.41797H113.068V18.3906H121.289V22.2988H113.068V32.1367H125.512V36H109.16ZM129.15 36V4.55469H133.059V36H129.15ZM135.305 22.3887V18.8398H139.393C142.567 18.7799 144.169 17.013 144.199 13.5391C144.139 9.97526 142.327 8.17839 138.764 8.14844H135.305V4.55469H139.482C143.825 4.70443 146.505 6.51628 147.523 9.99023C147.823 10.9785 147.973 12.0566 147.973 13.2246C147.943 16.6986 146.91 19.1393 144.873 20.5469C146.61 21.4753 147.658 23.1673 148.018 25.623C148.048 25.8327 148.077 26.0423 148.107 26.252L148.871 36H145.188L144.514 28.0039C144.274 25.4284 143.615 23.7812 142.537 23.0625C141.818 22.5833 140.845 22.3587 139.617 22.3887H135.305Z"
              fill="#272727"
            />
            <circle cx="160" cy="30" r="6" fill="#C586A5" />
          </svg>
        </div>
        <div className="">
          <ul className="flex gap-2" >
            <li>
              <Link href="/" className={`uppercase ${pathname === "/" ? "underline" : "text-gray-700"} `}>
                  Home
              </Link>
            </li>
            <li>
              <Link href="/collection" className={`uppercase ${pathname === "/collection" ? "underline " : "text-gray-700"} `}>
                  collection
              </Link>
            </li>
            <li>
              <Link href="/about" className={`uppercase ${pathname === "/about" ? "underline " : "text-gray-700"} `}>
                  about
              </Link>
            </li>
            <li>
              <Link href="/contact" className={`uppercase ${pathname === "/contact" ? "underline " : "text-gray-700"} `}>
                  contact
              </Link>
            </li>
            
          </ul>
        </div>  
        <div className="flex items-center gap-6">
            <img src="/assets/icons/search icon.png" className="w-5 cursor-pointer" alt="" />
          <div className="group relative">
            <img src="/assets/icons/profile_icon.png"  className="w-5 cursor-pointer" alt="" />
            <div className="group-hover:block hidden absolute right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded ">
                <p className="cursor-pointer hover:text-black" >My Profile </p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
          <Link href={"/cart"} className="relative">
            <img src="/assets/icons/cart.png" className="w-5 cursor-pointer" alt="" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">5</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
