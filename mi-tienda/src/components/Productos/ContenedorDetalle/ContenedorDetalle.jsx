import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { getProductById } from '../../../mock/MockData';
import { Detalle } from './Detalle/Detalle';
import { RxCaretLeft } from "react-icons/rx";

export const ContenedorDetalle = () => {

    const { prodId } = useParams();
    const [producto, setProducto] = useState()

    useEffect(() => {
      getProductById(prodId).then((response) => {
        setProducto(response)
      }).catch((err) => {
        console.log(err)
      });
    }, [prodId])
    
  return (
    <div className='md:px-6 pt-6 w-full flex justify-center items-end flex-col'>
      <div className='flex flex-row items-center w-full'>
        <Link to={'/productos/'} className='my-1 mx-2 bg-neutral-100 rounded-full size-9 flex items-center justify-center shadow-md'>
            <RxCaretLeft className='h-6 w-6' />
        </Link>
      </div>
      <Detalle producto={producto}/>
    </div>
  )
}
