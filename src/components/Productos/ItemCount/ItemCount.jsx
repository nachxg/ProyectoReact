import React from 'react'
import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa6'

export const ItemCount = ({stock}) => {

    const [cantidad,setCantidad] = useState(1)

    console.log(stock)

    const handlePlus = () => {
        cantidad == stock ? setCantidad(cantidad) : setCantidad(cantidad+1)
    }
    const handleMinus = () => {
      cantidad > 1 ? setCantidad(cantidad-1) : setCantidad(1)
    }

  return (
    <div className='group cursor-pointer h-10 w-48 text-black dark:text-white flex justify-end items-center'>
    cantidad:
      <span className='rounded-full p-2 flex items-center gap-2 justify-center *:text-black'>
        <FaMinus onClick={handleMinus} className='size-4 p-px bg-neutral-300 dark:bg-neutral-600 rounded-full' style={{color: cantidad == 1 ? 'gray' : 'black'}}/>
        {cantidad}
        <FaPlus onClick={handlePlus} className='size-4 p-px bg-neutral-300 dark:bg-neutral-600 rounded-full' style={{color: cantidad == stock ? 'gray' : 'black'}}/>
      </span>
   </div>
  )
}
