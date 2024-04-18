import React from 'react'
import { BsList } from "react-icons/bs";
import { useState, useEffect, useRef } from 'react';
import { Modo } from '../Modo/Modo';

export const Opciones = () => {

    const [optionBar, setOptionBar] = useState(false);

    const displayOptionBar = () => {
        setOptionBar(!optionBar)
    }

    const optionBarRef = useRef(null)
    const bodyRef = useRef(document.body)

    useEffect(() => {
        if(optionBar){
            optionBarRef.current.classList.remove('translate-x-full')
            optionBarRef.current.classList.add('translate-x-0')
            bodyRef.current.classList.add('overflow-hidden')
        } else {
            optionBarRef.current.classList.remove('translate-x-0')
            optionBarRef.current.classList.add('translate-x-full')
            bodyRef.current.classList.remove('overflow-hidden')
        }
    }, [optionBar])
    
  return (
    <>
        <button onClick={displayOptionBar} className='md:hidden'>
            <BsList className='h-7 w-7 mt-1 active:scale-[120%]' />
        </button>

        <div ref={optionBarRef} className='z-10 size-full fixed inset-0 top-[3.5rem] translate-x-full transition-transform duration-300 md:hidden bg-neutral-100 dark:bg-neutral-950 border-t-2 [border-image:linear-gradient(to_right,#d37912,#A83279)_30]'>
            <div className='text-xl py-4 font-[250] flex flex-col gap-4 justify-start items-start'>
                <a className='px-4' href="">inicio</a>
                <div className='w-full h-px bg-neutral-300 dark:bg-neutral-800'></div>
                <a className='px-4' href="">productos</a>
                <div className='w-full h-px bg-neutral-300 dark:bg-neutral-800'></div>
                <a className='px-4' href="">contacto</a>
                <div className='w-full h-px bg-neutral-300 dark:bg-neutral-800'></div>
                <a className='px-4' href="">nosotros</a>
                <div className='w-full h-px bg-neutral-300 dark:bg-neutral-800'></div>
            </div>
            <div className='dark:text-white active:scale-[110%] absolute right-8 bottom-24 size-14 flex items-center justify-center pb-1 rounded-full bg-gradient-to-tr from-[#d37912] to-[#A83279]'>
                <Modo showInOptions = {true}/> 
            </div>
        </div>
    </>
  )
}