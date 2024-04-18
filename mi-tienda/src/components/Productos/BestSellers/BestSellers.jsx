import React from 'react'

export const BestSellers = ({msj}) => {
  return (
    <div className='md:w-1/4 md:p-3 w-full flex flex-col justify-center items-start'>
        <h1 className='px-3 md:px-0 text-left text-3xl md:text-4xl font-extralight dark:font-thin'>best sellers</h1>
        <div className='bg-neutral-100 shadow-neutral-400 shadow-md size-full md:rounded-md flex justify-center items-center p-3 dark:bg-stone-950 dark:text-white dark:shadow-black'>{msj}</div>
      </div>
  )
}
