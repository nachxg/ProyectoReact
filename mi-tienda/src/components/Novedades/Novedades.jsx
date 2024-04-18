import React from 'react'

export const Novedades = ({msj}) => {
  return (
    <div className='md:px-6 pt-6 w-full h-80 md:h-[460px] flex justify-center items-end flex-col'>
      <h1 className='px-3 md:px-0 text-right text-5xl w-fit font-normal'>novedades</h1>
      <div className='w-full h-full p-1 flex justify-center items-center relative bg-neutral-100 shadow-md shadow-neutral-400 border-red-500 md:rounded-md dark:bg-stone-950 dark:shadow-black'>
        {msj}
        <div className='absolute w-full h-1 inset-y-full md:h-[0.5rem] md:inset-y-[98%] md:rounded-b-md bg-gradient-to-r from-[#d37912] to-[#A83279]'></div>
        </div>
    </div>
  )
}
