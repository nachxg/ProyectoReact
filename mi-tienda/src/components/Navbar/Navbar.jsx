import React from 'react'
import { Modo } from './Modo/Modo';
import { Carrito } from './Carrito/Carrito';
import { Busqueda } from './Busqueda/Busqueda';
import { Opciones } from './Opciones/Opciones';

export const Navbar = () => {

    return (
            <nav className='z-20 bg-neutral-100 w-full flex justify-start items-center py-1 px-3 md:px-5 md:py-2 shadow-md shadow-neutral-400 dark:bg-neutral-950 dark:shadow-black'>
                <div className='w-auto text-5xl md:text-6xl font-thin cursor-pointer relative md:pb-1 md:pr-5'>
                    <a className= 'p-0 m-0 bg-gradient-to-r from-[#d37912] to-[#A83279] bg-clip-text text-transparent'>
                        v
                        <span id="spanStore" className='font-[400]'>
                            st<i className='circ fa-solid fa-record-vinyl text-[1.6rem] md:text-[32px] md:pt-0 pt-px align-middle'></i>re
                        </span>
                    </a>
                    <div className='hidden md:block absolute w-px rounded-2xl h-12 inset-y-2 inset-x-full bg-black dark:bg-white '></div>
                </div>

                <div className='sub-animado font-light hidden md:flex flex-row justify-center gap-4 px-5 text-xl'>
                    <a className='cursor-pointer relative'>inicio</a>
                    <a className='cursor-pointer relative'>productos</a>
                    <a className='cursor-pointer relative'>contacto</a>
                    <a className='cursor-pointer relative'>nosotros</a>
                </div>
                
                <div className='md:mr-2 ml-auto gap-2 md:gap-5 flex justify-center pt-1 items-center'>
                        <Busqueda />
                        <Carrito />
                        <Modo />
                        <Opciones />
                </div>
            </nav>
    )
}
