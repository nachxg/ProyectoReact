import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { FaRecordVinyl } from "react-icons/fa6";
import { Modo } from './Modo/Modo';

export const Navbar = () => {

    const [mouseOver, setMouseOver] = useState("");

    const handleMouseOver = () => {
        setMouseOver(<span className='opacity-100 absolute'>inyl</span>);
        document.getElementById("spanStore").classList.add("translate-x-16","ml-[6px]");
    }

    const handleMouseOut = () => {
        setMouseOver(<span className='opacity-0 absolute'>inyl</span>);
        document.getElementById("spanStore").classList.remove("translate-x-16","ml-[6px]");
    }

    return (
            <nav className='bg-neutral-50 shadow-neutral-300 shadow-md bg-opacity-80 dark:bg-stone-950 dark:shadow-black dark:shadow-xl dark:bg-opacity-80 w-full flex justify-between items-center px-5 py-2 sticky top-0'>
                <a onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="ml-2 mr-2 w-1/3 text-6xl font-thin cursor-pointer">
                    v{mouseOver}
                    <span id="spanStore" className='font-[400] absolute'>
                        st<FaRecordVinyl className='h-8 w-8 p-0 m-0 inline'/>re
                    </span>
                </a>

                <div className='font-extralight flex flex-row justify-center gap-3 text-xl dark:font-thin w-1/3'>
                    <a className='hover:font-normal dark:hover:font-light cursor-pointer'>inicio</a>
                    <a className='hover:font-normal dark:hover:font-light cursor-pointer'>productos</a>
                    <a className='hover:font-normal dark:hover:font-light cursor-pointer'>contacto</a>
                    <a className='hover:font-normal dark:hover:font-light cursor-pointer'>nosotros</a>
                </div>
                
                <div className='mr-2 gap-5 flex justify-end items-center w-1/3'>
                        <BsSearch className='h-6 w-6 mt-1 p-[1px] hover:scale-[120%] cursor-pointer'/>
                        <BsCart3 className='h-7 w-7 p-[1px] hover:scale-[120%] cursor-pointer'/>
                        <Modo />
                </div>
            </nav>
    )
}
