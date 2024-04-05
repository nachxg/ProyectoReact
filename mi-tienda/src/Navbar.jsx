import React from 'react'
import { BsSearch } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { FaRecordVinyl } from "react-icons/fa6";

export const Navbar = () => {
    return (
        <>
            <div className='bg-stone-950 bg-opacity-80 shadow-black shadow-xl text-slate-50 w-screen flex items-center px-5 py-2 '>
                <a href="" className="ml-2 mr-2 text-6xl font-thin font-['DM_Sans'] hover:text-yellow-400 transition-all duration-300">
                    vinyl
                    <span className='font-[400]'>
                        st<FaRecordVinyl className='h-8 w-8 p-0 m-0 inline'/>re
                    </span>
                </a>
                <div className='mr-2 gap-5 ml-auto flex justify-center items-center text-white'>
                    <div className=''>
                        <BsSearch className='h-5 w-5 mt-1 hover:scale-[120%] hover:text-yellow-400 transition-all duration-300 cursor-pointer'/>
                    </div>
                    <div>
                        <BsCart3 className='h-6 w-6 hover:scale-[120%] hover:text-yellow-400 transition-all duration-300 cursor-pointer'/>
                    </div>
                    <div>
                        <BsList className='h-7 w-7 mt-1 hover:scale-[120%] hover:text-yellow-400 transition-all duration-300 cursor-pointer'/>
                    </div>
                </div>
            </div>
        </>
    )
}
