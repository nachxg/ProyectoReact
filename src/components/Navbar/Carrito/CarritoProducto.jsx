import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";

export const CarritoProducto = ({ id, nombre, artista, portada, precio, cantidad, stock, borrarItem }) => {

  return (
    <div className='h-28 max-h-28 min-h-28 flex flex-row p-2 gap-2 font-normal text-sm'>

        <div className='max-h-full w-[6.5rem] rounded-sm bg-center bg-cover' style={{backgroundImage: `url('${portada}')`}} />
        
        <div className='flex flex-row flex-1'>
            <div className='flex flex-col items-start justify-center h-full w-[50%]'>
                <div className='flex-1 h-full'>
                    <h3><b>{nombre}</b></h3>
                    <h3 className='min-h-9 text-neutral-500'>{artista}</h3>
                </div>
                <p>Cantidad: {cantidad}</p>
            </div>
            <div className='flex-1 flex flex-col justify-between *:ml-auto'>
                <button onClick={() => borrarItem(id, precio, cantidad)}><FaRegTrashCan className='cursor-pointer text-neutral-500 size-4 hover:text-black dark:hover:text-white'/></button>
                <p className='text-neutral-500'>${(precio*cantidad).toFixed(2)}</p>
            </div>
        </div>

    </div>
  )
}
