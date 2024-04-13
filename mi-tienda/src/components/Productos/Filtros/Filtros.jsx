import React from 'react'

export const Filtros = ({msj}) => {
  return (
    <div className='w-1/4 p-3 flex flex-col justify-center items-start'>
        <h1 className='text-left text-4xl font-extralight dark:font-thin'>filtros</h1>
        <div className='bg-neutral-100 shadow-neutral-400 shadow-md size-full rounded-lg flex justify-center items-center p-3 dark:shadow-lg dark:bg-stone-950 dark:text-white dark:shadow-black'>{msj}</div>
      </div>
  )
}
