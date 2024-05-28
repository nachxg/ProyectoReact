import React from 'react'

export const Recientes = ({msj}) => {
  return (
    <div className='md:w-3/4 w-full pt-3 md:p-3 flex flex-col justify-center items-start'>
        <h1 className='px-3 md:px-0 text-right w-full md:text-left text-3xl md:text-4xl font-normal'>añadidos recientemente</h1>
        <div className='size-full md:rounded-md flex justify-center items-center bg-neutral-100 shadow-md shadow-neutral-400 dark:shadow-black dark:bg-stone-950'>{msj}</div>
    </div>
  )
}
