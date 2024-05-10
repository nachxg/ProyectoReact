import React from 'react'
import { BsCart3 } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const Producto = ({ nombre, artista, portada, precio, id }) => {

  return (
    <div className='min-h-[21rem] relative flex flex-col cursor-pointer rounded-lg p-3 hover:-translate-y-1 hover:shadow-md hover:shadow-neutral-400 hover:dark:shadow-black hover:dark:bg-neutral-950 hover:bg-neutral-100 transition-all duration-200'>
      
      <Link to={`/productos/${id}`} className='relative'>
        <div className='hover:opacity-80 opacity-0 rounded-md hover-detalle absolute w-full h-[calc(100%-1.25rem)] text-white flex justify-center items-center bg-black'>Ver detalle</div>
        <img src={portada} alt="" className='rounded-md mb-5' />
      </Link>

      <div className='flex flex-row flex-wrap justify-start items-left'>
        <div className='text-md font-medium text-balance max-w-40'>{nombre}</div>
        <div className='ml-auto text-neutral-500'>${precio}</div>
      </div>

      <div className='text-neutral-500 text-sm max-w-40 break-words'>{artista}</div>

      <button className='group rounded-full size-9 absolute bottom-2 right-2 text-black flex justify-center items-center'>
        <BsCart3 className='h-6 w-6'/>
        <FaPlus className='group-hover:bg-gradient-to-r p-px group-hover:text-white from-[#d37912] to-[#A83279] absolute bottom-[19px] right-[4px] bg-neutral-200 rounded-full size-3'></FaPlus>
      </button>

    </div>
  )
}
