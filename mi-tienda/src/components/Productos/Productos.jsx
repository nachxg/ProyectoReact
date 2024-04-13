import React from 'react'
import { Filtros } from './Filtros/Filtros'
import { Recientes } from './Recientes/Recientes'

export const Productos = () => {
  return (
    <div className='w-full h-96 flex flex-row mb-6 p-3 gap-4'>
        <Filtros msj = "Acá se filtrarán los productos por género, artista, etc."/>
        <Recientes msj = "Acá se mostrarán los últimos productos añadidos." />
    </div>
  )
}
