import React from 'react';
import { Navbar } from './Navbar';

export const Landing = () => {
  return (
    <div className='h-screen w-screen bg-stone-950 flex justify-center items-start bg-[url("./assets/fondo3.jpg")] bg-[length:800px_800px] bg-blend-multiply bg-center bg-repeat'>
        <Navbar/>
    </div>
  )
}
