import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { FaRegTrashCan } from "react-icons/fa6";
import { CarritoProducto } from './CarritoProducto';
import { useCarritoContext } from '../../../context/CarritoContext';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { db } from "../../../firebase/dbConnection";
import { addDoc, collection } from "firebase/firestore";
import { Checkout } from './Checkout';

export const Carrito = ({ show, cerrar }) => {

    const [confirmacion, setConfirmacion] = useState(false);
    const [formData, setFormData] = useState({nombre: "", tel:"", correo:""})
    
    const bodyRef = useRef(document.body)
    const bgRef = useRef(null)
    const carritoRef = useRef(null)

    const { carrito, borrarItem, vaciarCarrito, precioTotal } = useCarritoContext();

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleFinalizarCompra = () => {
        const ordenesCollection = collection(db, "ordenes");

        const nuevaOrden = {
            cliente: formData,
            productos: carrito,
            fecha: new Date(),
            total: precioTotal
        }

        addDoc(ordenesCollection, nuevaOrden)
            .then((res) => {
                alert(`Su compra fue procesada exitosamente. ID de orden: ${res.id}`);
                setFormData({nombre: "", tel:"", correo:""});
                vaciarCarrito();
                setConfirmacion(false);
            })
            .catch((err) => console.log(err));
        }

        useEffect(() => {

            if (show) {
                bgRef.current.classList.remove('hidden')
                bgRef.current.classList.add('block')
                bodyRef.current.classList.add('overflow-hidden')
                setTimeout(() => {
                    bgRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
                    carritoRef.current.style.right = '0'
                }, 10);
            } else {
                bgRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0)'
                carritoRef.current.style.right = '-30rem'
                setTimeout(() => {
                    bgRef.current.classList.add('hidden')
                    bgRef.current.classList.remove('block')
                    bodyRef.current.classList.remove('overflow-hidden')
                }, 300);
            }

        }, [show])

    return (
        <div ref={bgRef} className='font-light carrito z-40 hidden absolute top-0 left-0 h-screen w-screen'>            
            <div ref={carritoRef} className='fixed top-0 h-full w-[30rem] bg-neutral-200 dark:bg-neutral-900 flex flex-col py-2 px-5'>
                <div className='flex flex-row items-center w-full px-5 pb-2'>
                    <h1 className='text-2xl flex-1 text-center '>
                        carrito de compras
                    </h1>
                    <button onClick={cerrar}>
                        <IoMdClose className='size-5 mt-1'/>
                    </button>
                </div>
                {carrito.length != 0 
                    ? <> 
                        <div className='my-2 flex-1 flex flex-col items-stretch justify-start overflow-x-hidden overflow-y-auto *:my-1 *:mr-2 *:rounded-md *:bg-neutral-100 *:shadow-md *:shadow-neutral-300 *:dark:bg-neutral-950 *:dark:shadow-black'>
                            {carrito?.map(item => <CarritoProducto key={item.id} {...item} borrarItem={borrarItem}/>)}
                        </div>
                        <div className='h-20 w-full  flex flex-row items-center justify-between'>
                            <h1 className='text-lg'>total: <b className='font-semibold'>${precioTotal.toFixed(2)}</b></h1>
                            <div className='flex flex-row-reverse gap-2'>
                                <button onClick={() => setConfirmacion(true)} className='text-lg font-normal px-5 py-2 text-white bg-gradient-to-tr from-[#d37912] to-[#A83279] rounded-md hover:scale-105 transition-transform'>
                                    Pagar
                                </button>
                                <button onClick={vaciarCarrito} className='text-md font-normal text-neutral-500 hover:underline flex flex-row items-center justify-center gap-1'>
                                    <span><FaRegTrashCan/></span>
                                    vaciar carrito
                                </button>
                            </div>
                        </div> 
                      </>
                    : <div className='flex-1 flex flex-row items-center justify-center text-left text-neutral-500 gap-4'>
                        <AiOutlineExclamationCircle className='size-10'/>
                        <span>Tu carrito se encuentra vacío. Dirigite a la sección de productos para comenzar a comprar.</span>
                      </div>
                    }
            </div>
            
            {confirmacion && <Checkout carrito={carrito} precioTotal={precioTotal} setConfirmacion={setConfirmacion} handleFormChange={handleFormChange} handleFinalizarCompra={handleFinalizarCompra} /> }

        </div>
    )
}