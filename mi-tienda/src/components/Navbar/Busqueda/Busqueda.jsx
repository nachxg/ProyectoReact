import React from 'react'
import { BsSearch } from "react-icons/bs";

export const Busqueda = () => {
  return (
    <button>
        <BsSearch className='h-6 w-6 mt-1 p-[1px] hidden md:block hover:scale-[120%] cursor-pointer'/>
    </button>
  )
}
