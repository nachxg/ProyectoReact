import React from 'react'

export const Novedades = ({msj}) => {
  return (
    <div className='px-6 pt-6  w-full h-[460px] flex justify-center items-end flex-col'>
      <h1 className='text-right text-5xl w-fit font-normal'>novedades</h1>
      <div className='w-full bg-neutral-100 shadow-neutral-400 dark:bg-stone-950 flex-1 rounded-lg shadow-md dark:shadow-lg dark:shadow-black text-center flex justify-center items-center'>{msj}</div>
    </div>
  )
}
