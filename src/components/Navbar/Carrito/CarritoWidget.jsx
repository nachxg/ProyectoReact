import { BsCart3 } from "react-icons/bs";
import { Carrito } from './Carrito';
import { useCarritoContext } from '../../../context/CarritoContext';

export const CarritoWidget = () => {

  const { cantidadTotal, alternarVisible, visible } = useCarritoContext();

  return (
    <>
      <button onClick={alternarVisible} className='relative active:scale-[120%] md:hover:scale-[120%]'>
          <BsCart3 className='h-6 w-6 md:h-7 md:w-7 md:p-[1px]'/>
          {cantidadTotal != 0 && <div className='absolute bg-gradient-to-r from-[#d37912] to-[#A83279] flex items-center justify-center size-[17px] rounded-full -top-[5px] -right-[6px] text-white text-xs'>
            {cantidadTotal}
          </div>}
      </button>
      <Carrito show={visible} cerrar={alternarVisible} />
    </>
  )
}