import React from 'react'
import { BsList } from "react-icons/bs";
import { useState, useEffect, useRef } from 'react';
import { Modo } from '../Modo/Modo';
import { IoMdClose } from "react-icons/io";

export const Opciones = () => {

    const [optionBar, setOptionBar] = useState(false);

    const displayOptionBar = () => {
        setOptionBar(!optionBar)
    }

    const optionBarRef = useRef(null)
    const bodyRef = useRef(document.body)

    useEffect(() => {

        if(optionBar && window.innerWidth < 768){
            optionBarRef.current.classList.remove('translate-x-full');
            optionBarRef.current.classList.add('translate-x-0');
            document.body.classList.add('overflow-hidden');
        } else {
            optionBarRef.current.classList.remove('translate-x-0');
            optionBarRef.current.classList.add('translate-x-full');
            document.body.classList.remove('overflow-hidden');
        }

        const handleResize = () => {
            if(optionBar && window.innerWidth > 768){
                bodyRef.current.classList.remove('overflow-hidden');
                setOptionBar(!optionBar)
            }
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [optionBar]);

    const listIcon = <BsList className='h-7 w-7 mt-1 active:scale-[120%]'/>
    const crossIcon = <IoMdClose className='h-7 w-7 mt-1 active:scale-[120%]'/>
    
  return (
    <>
        <button onClick={displayOptionBar} className='md:hidden'>
            {optionBar ? crossIcon : listIcon}
        </button>

        <div ref={optionBarRef} className='z-10 size-full fixed inset-0 top-[3.5rem] translate-x-full duration-300 md:hidden bg-neutral-100 dark:bg-neutral-950 border-t-2 [border-image:linear-gradient(to_right,#d37912,#A83279)_30]'>
            <div className='text-xl font-[250] flex flex-col justify-start items-start'>

                <button className='p-4 border-b-[1px] active:bg-neutral-300 dark:active:bg-neutral-800 border-neutral-300 dark:border-neutral-800 w-full text-left'>inicio</button>
                <button className='p-4 border-b-[1px] active:bg-neutral-300 dark:active:bg-neutral-800 border-neutral-300 dark:border-neutral-800 w-full text-left'>productos</button>
            
            </div>

            <div className='text-white active:scale-[110%] absolute right-8 bottom-24 size-14 flex items-center justify-center pb-1 rounded-full bg-gradient-to-tr from-[#d37912] to-[#A83279]'>
                <Modo showInOptions = {true}/> 
            </div>
            
        </div>
    </>
  )
}