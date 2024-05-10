import React from 'react'
import { Modo } from './Modo/Modo';
import { Carrito } from './Carrito/Carrito';
import { Busqueda } from './Busqueda/Busqueda';
import { Opciones } from './Opciones/Opciones';
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
            <nav className='z-40 bg-neutral-100 w-full flex justify-start items-center py-1 px-3 lg:px-5 lg:py-1 sticky top-0 shadow-md rounded-br-sm shadow-neutral-400 dark:bg-neutral-950 dark:shadow-black'>
                <div className='w-fit text-nowrap whitespace-nowrap text-5xl lg:text-6xl font-thin cursor-pointer relative lg:pb-1 lg:pr-5'>
                    <Link to='/' className= 'p-0 m-0 bg-gradient-to-r from-[#d37912] to-[#A83279] bg-clip-text text-transparent'>
                        v
                        <span id="spanStore" className='font-[400]'>
                            st<i className='circ fa-solid fa-record-vinyl text-[1.6rem] lg:text-[32px] lg:pt-0 pt-px align-middle'></i>re
                        </span>
                    </Link>
                    <div className='hidden md:block lg:block absolute w-px rounded-2xl md:h-9 lg:h-12 md:inset-y-2 lg:inset-y-2 md:inset-x-[8.1rem] lg:inset-x-full bg-black dark:bg-white '></div>
                </div>

                <div className='sub-animado  md:pt-1 lg:pt-0 font-light hidden md:text-lg md:flex flex-row justify-center md:gap-3 gap-4 md:pr-1 px-5 lg:text-xl'>
                    <Link to='/' className='cursor-pointer relative'>inicio</Link>
                    <Link to='/productos' className='cursor-pointer relative'>productos</Link>
                    <Link to='/' className='cursor-pointer relative'>contacto</Link>
                    <Link to='/' className='cursor-pointer relative'>nosotros</Link>
                </div>
                
                <div className='w-full md:pt-px lg:pt-0 lg:mr-2 gap-4 lg:gap-5 flex justify-end items-center'>
                        <Busqueda />
                        <Carrito />
                        <Modo />
                        <Opciones />
                </div>
            </nav>
    )
}
