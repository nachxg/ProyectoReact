import React from 'react'
import { IoMdClose } from "react-icons/io";

export const Checkout = ({carrito, precioTotal, setConfirmacion, handleFormChange, handleFinalizarCompra}) => {
    return (
        <>
            <div className='h-full w-full absolute top-0 left-0 bg-[rgba(0,0,0,0.7)] z-50 flex items-center justify-center'>
                <div className='min-h-96 w-[30rem] bg-neutral-200 dark:bg-neutral-900 flex flex-col gap-5 items-start justify-start p-10 rounded-md'>
                    <div className='w-full flex flex-row gap-1 items-center justify-center'>
                        <h1 className='text-2xl flex-1 font-light'>Confirmación de compra</h1>
                        <IoMdClose onClick={() => setConfirmacion(false)} className='size-6 cursor-pointer' />
                    </div>

                    <div className='text-sm font-normal px-10 mt-5'>
                        <div className='w-full'>
                            <div>Estás a punto de comprar: {carrito?.map(item => <p key={item.id} className='ml-1'> - {item.cantidad}x {item.nombre}</p>)}</div>
                            <span className=''>por un total de: <b>${precioTotal.toFixed(2)}</b></span>
                        </div>
                    </div>

                    <div className='input-animado w-full h-12 relative font-light mt-5'>
                        <input onChange={handleFormChange} placeholder=" " id="nombre" name="nombre" type="text" required className='px-3 relative z-0 h-full border-neutral-500 border-[1px] rounded-md w-full focus:outline-2 bg-neutral-200 dark:bg-neutral-900' />
                        <label htmlFor="nombre" className='absolute bottom-3 left-3 z-10 bg-neutral-200 dark:bg-neutral-900 px-1'>Nombre completo</label>
                    </div>

                    <div className='input-animado w-full h-12 relative font-light'>
                        <input onChange={handleFormChange} placeholder=" " id="tel" name="tel" type="number" required className='px-3 relative z-0 h-full border-neutral-500 border-[1px] rounded-md w-full focus:outline-2 bg-neutral-200 dark:bg-neutral-900' />
                        <label htmlFor="tel" className='absolute bottom-3 left-3 z-10 bg-neutral-200 dark:bg-neutral-900 px-1'>Número de teléfono</label>
                    </div>

                    <div className='input-animado w-full h-12 relative font-light'>
                        <input onChange={handleFormChange} placeholder=" " id="correo" name="correo" type="email" required className='px-3 relative z-0 h-full border-neutral-500 border-[1px] rounded-md w-full focus:outline-2 bg-neutral-200 dark:bg-neutral-900' />
                        <label htmlFor="correo" className='absolute bottom-3 left-3 z-10 bg-neutral-200 dark:bg-neutral-900 px-1'>Correo electrónico</label>
                    </div>
                    <button onClick={handleFinalizarCompra} className='text-lg font-normal px-5 py-2 text-white bg-gradient-to-tr from-[#d37912] to-[#A83279] rounded-md hover:scale-105 transition-transform ml-auto mr-auto mt-5'>
                        Finalizar compra
                    </button>
                </div>
            </div>
        </>
    )
}
