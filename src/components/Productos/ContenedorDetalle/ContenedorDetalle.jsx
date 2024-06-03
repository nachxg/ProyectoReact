import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { Detalle } from './Detalle/Detalle';
import { RxCaretLeft } from "react-icons/rx";
import { PiVinylRecordLight } from 'react-icons/pi';
import { db } from '../../../firebase/dbConnection'
import { collection, getDoc, doc } from "firebase/firestore";

export const ContenedorDetalle = () => {

    const { prodId } = useParams();
    const [producto, setProducto] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setLoading(true);
      const productosCollection = collection(db, "productos");
      const refDoc = doc(productosCollection, prodId);

      getDoc(refDoc)
        .then((doc) => {
          setProducto({ id: doc.id, ...doc.data() });
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }, [prodId])
    
  return (
    <div className='md:px-10 pt-6 h-full w-full flex justify-center items-end flex-col min-h-[27rem]'>
      { loading ? <PiVinylRecordLight className='absolute inset-y-[50%] inset-x-[46%] animate-spin size-20'/> : 
      <>
      <div className='flex flex-row items-center w-full'>
        <Link to={'/productos/'} className='my-1 -ml-1 bg-neutral-100 dark:bg-neutral-950 rounded-full size-9 flex items-center justify-center shadow-md'>
            <RxCaretLeft className='h-6 w-6' />
        </Link>
      </div>
      <Detalle producto={producto} /> </> }
    </div>
  )
}
