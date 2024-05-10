import React from 'react'
import { Novedades } from './Novedades/Novedades'
import { BestSellers } from './BestSellers/BestSellers'
import { Recientes } from './Recientes/Recientes'

export const Home = () => {
  return (
    <>
        <Novedades />

        <div className='pt-6 w-full h-[500px] flex flex-row flex-wrap md:flex-nowrap md:flex-row mb-6 md:p-3 gap-3 md:gap-4'>
            <BestSellers msj = "Acá se mostrarán los vinilos más vendidos."/>
            <Recientes msj = "Acá se mostrarán los últimos productos añadidos."/>
        </div>
    </>
  )
}
