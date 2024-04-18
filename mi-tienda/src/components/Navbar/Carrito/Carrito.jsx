import React from 'react'
import { BsCart3 } from "react-icons/bs";

export const Carrito = () => {
  return (
    <button className='relative active:scale-[120%] md:hover:scale-[120%]'>
        <BsCart3 className='h-6 w-6 md:h-7 md:w-7 md:p-[1px]'/>
        <div className='absolute bg-gradient-to-r from-[#d37912] to-[#A83279] flex items-center justify-center size-[17px] rounded-full -top-[5px] -right-[6px] text-white text-sm'>
          3
        </div>
    </button>
  )
}
