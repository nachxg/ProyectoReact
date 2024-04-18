import React from 'react'
import { BsCart3 } from "react-icons/bs";

export const Carrito = () => {
  return (
    <button>
        <BsCart3 className='h-6 w-6 md:h-7 md:w-7 md:p-[1px] active:scale-[120%] md:hover:scale-[120%] cursor-pointer'/>
    </button>
  )
}
