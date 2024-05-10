import React from 'react'
import { PiCaretDown } from "react-icons/pi";
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export const Filtros = ({listas}) => {

    const fechas = listas[0];
    const artistas = listas[1];

    console.log('Fechas: ',Array.isArray(fechas),'Artistas: ', artistas)

    const desplegable = useRef(null)
    const listaGeneros = useRef(null)
    const [lista, setLista] = useState(false)

    const handleClick = () => {
        setLista(!lista)
    }

    useEffect(() => {

      if(lista){
        desplegable.current.style.height = '15rem'
        desplegable.current.style.transition = 'height 0.2s ease'
        listaGeneros.current.style.opacity = '100'
      } else {
        desplegable.current.style.height = '0'
        listaGeneros.current.style.opacity = '0'
        listaGeneros.current.style.transition = 'opacity 0.2s ease'
      }

    }, [lista])
    
  return (
    <div className='relative mr-auto flex flex-row gap-4'>
        <button onClick={handleClick} className='w-[15.41rem] relative z-20 py-1 px-5 shadow-md text-lg font-light bg-neutral-100 rounded-full flex flex-row items-center justify-between gap-2 cursor-pointer'>
           <span>filtros</span> <PiCaretDown  className=''/>
        </button>
        <div ref={desplegable} className='z-10 w-full absolute bg-neutral-100 h-0 inset-0 rounded-xl top-3 transition-opacity duration-100 shadow-md'>
            <div ref={listaGeneros} className='mt-7 mx-5 opacity-0 flex flex-row flex-wrap *:w-24 gap-x-3 gap-y-2 *:h-fit *:break-words'>
              <div className='*:text-neutral-500 *:text-sm *:cursor-pointer flex flex-col'>
                
              </div>
            </div>
        </div>
    </div>
  )
}