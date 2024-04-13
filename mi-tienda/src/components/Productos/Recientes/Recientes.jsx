import React from 'react'

export const Recientes = ({msj}) => {
  return (
    <div className='w-3/4 p-3 flex flex-col justify-center items-start'>
        <h1 className='text-left text-4xl font-normal'>añadidos recientemente</h1>
        <div className='size-full rounded-lg flex justify-center items-center bg-neutral-100 shadow-md shadow-neutral-400 dark:shadow-black dark:bg-stone-950 dark:shadow-lg'>{msj}</div>
    </div>
  )
}
