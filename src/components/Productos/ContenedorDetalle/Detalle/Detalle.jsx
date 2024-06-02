import React, { useState, useEffect } from 'react'
import { BsCart3 } from "react-icons/bs";
import { FaPlus, FaCheck } from 'react-icons/fa6';
import { ItemCount } from '../../ItemCount/ItemCount';
import { useCarritoContext } from '../../../../context/CarritoContext';

export const Detalle = ({ producto }) => {

  const [ enCarrito, setEnCarrito ] = useState(false)
  const [ cantidadFinal, setCantidadFinal ] = useState(1);
  const { agregarAlCarrito, alternarVisible, estaEnCarrito, carrito } = useCarritoContext();

  const modificarCantidad = (cantItems) => {
    setCantidadFinal(cantItems)
  }

  useEffect(() => {
    if(estaEnCarrito(producto.id)){
      setEnCarrito(true)
    } else {
      setEnCarrito(false)
    }
  }, [carrito])

  return (
    <div className='w-full flex flex-row pt-3 h-[70vh] justify-between items-center gap-5 *:h-full *:flex'>
      
      <div className='relative items-start w-4/5 bg-neutral-100 dark:bg-neutral-950 px-5 pt-5 pb-0 rounded-md shadow-md shadow-neutral-400 dark:shadow-black flex-row'>
        
        <div className='flex-col min-w-[20rem] flex items-center justify-center h-full'>
          <img src={producto.portada} alt="" className='size-72 rounded-lg shadow-md' />
        </div>
        
        <div className='w-fit h-full px-5 pt-5 pb-0 gap-3 flex flex-col justify-center'>
          
          <div className='flex flex-row'>          
            <h1 className='text-2xl pt-3'>
              {producto.nombre}
              <span className='pl-2 text-neutral-600 font-light text-xl'>{producto.artista}</span>
            </h1>
          </div>
          
          <p className='text-sm'>{producto.descripcion}</p>
          
          <div className='flex flex-col w-full *:text-sm'>
            <p className='text-neutral-600'> Lanzamiento:
              <span className='text-black dark:text-white'> {producto.fecha}</span>
            </p>
            <p className='text-neutral-600'> Género/s:
              <span className='text-black dark:text-white'> {producto.genero}</span>
            </p>
            <p className='text-neutral-600'> Precio por unidad:
              <span className='text-black dark:text-white'> ${producto.precio}</span>
            </p>
            <p className='text-neutral-600'> Stock:
              <span className='text-black dark:text-white'> {producto.stock}</span>
            </p>
          </div>

          <div className='flex items-end justify-end flex-row gap-3 mt-auto'>

          { enCarrito 
              ? <button onClick={alternarVisible} className='btn-trans gap-1 h-10 bg-[#d37912] rounded-tl-xl rounded-tr-xl group hover:h-12 w-fit relative px-5 pb-1 text-black flex justify-center items-center'>
                  producto agregado al carrito
                  <FaCheck></FaCheck>
                </button>
              : <>
                  <div className='pb-2'>
                    <ItemCount stock={producto.stock} agregar={modificarCantidad}/>
                  </div>
                  <button onClick={() => {
                    agregarAlCarrito(producto, cantidadFinal)
                    setEnCarrito(true)
                  }} className='btn-trans bg-[#d37912] hover:h-12 rounded-tl-xl rounded-tr-xl group cursor-pointer h-10 w-48 relative pl-2 pb-1 text-black flex justify-center items-center'>
                    agregar al carrito
                      <span className='relative rounded-full p-2 flex items-center justify-center'>
                        <BsCart3 className='h-5 w-5'/>
                        <FaPlus className='group-hover: bg-[#d37912] size-3 p-px absolute bottom-[18px] right-[5px] rounded-full'/>
                      </span>
                  </button>
                </>
           }

          </div>
          
        </div>

        <div className='absolute w-full h-1 bottom-0 left-0 rounded-bl-md rounded-br-md bg-gradient-to-l from-[#d37912] to-[#A83279]'></div>
      </div>
            
      <div className='items-start pt-5 w-1/5 flex-col'>
        
        <h1 className='text-xl'>Tracklist: </h1>
        
        {producto.tracks.map((track, index) => (
          <p key={index} className='font-light'>{index + 1}. {track}</p>
        ))}
      
      </div>

      
    </div>
  )
}
