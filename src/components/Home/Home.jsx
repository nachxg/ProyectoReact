import vinilofondo from '../../assets/vinilofondo.png'
import { Link } from 'react-router-dom'
import { importarProductos } from '../../mock/importarProductos'
import { useEffect } from 'react'
export const Home = () => {

  return (
    <div className="h-[40rem] w-full relative">
      <div className='relative z-10 ml-auto w-full h-full flex flex-row justify-center items-center'>
        <img src={vinilofondo} alt="" className='xl:size-[40rem] min-w-[35rem] min-h-[35rem] absolute -left-64 top-10 z-0'/>
        <div className='ml-auto w-full md:w-[70%] bg-neutral-300 shadow-md shadow-neutral-400 dark:shadow-black dark:bg-neutral-800 dark:bg-opacity-90 bg-opacity-90 md:rounded-tl-md md:rounded-bl-md flex flex-col relative z-10 p-10'>
          <h1 className='w-full text-5xl font-medium bg-gradient-to-r from-[#d37912] to-[#A83279] bg-clip-text text-transparent'>experimentá la música como nunca antes</h1>
          <p className='text-lg py-1 font-light'>Redescubrí la autenticidad y la riqueza del sonido con nuestra selección de alta calidad, cuidadosamente curada para ofrecer una experiencia auditiva inigualable. Sumergite en un mundo donde la pureza y la calidez del sonido transforman cada momento en una vivencia única y memorable.</p>
          <Link to={'/productos'} className='flex items-center w-fit ml-auto pr-10 text-xl text-neutral-400 hover:text-black dark:text-neutral-700 dark:hover:text-white gap-1 underline transition-none'>explorá nuestro catálogo <span className=''><i className="fa-solid fa-arrow-right pt-[2px] text-sm transition-none"></i></span></Link>
        </div>
      </div>
    </div>
  )
}
