import React from 'react'

export const Detalle = ({producto}) => {
    console.log(producto)
  return (
    <div className='w-full h-full flex flex-row pt-3 justify-center items-center gap-5 *:w-1/3 *:h-[25rem] *:flex *:flex-col *:items-start *:justify-center'>
        <div className=''>
          <img src={producto && producto.portada} alt="" className='size-80 rounded-lg shadow-md'/>
        </div>
        <div>
          <h1 className='text-2xl'>{producto && producto.nombre}</h1>
          <h1 className='text-xl'>{producto && producto.artista}</h1>
          <h2 className='text-lg text-neutral-500'>{producto && producto.descripcion}</h2>
        </div>
    </div>
  )
}
