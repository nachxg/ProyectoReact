import React , {useEffect, useState, useRef} from 'react'
import { BsSearch } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

export const Busqueda = () => {

  const [searchBar, setSearchBar] = useState(false)

  const handleSearchClick = () => {
    setSearchBar(!searchBar)
  }

  const inputRef = useRef(null)
  const buttonRef = useRef(null)
  
  const iconoBusqueda = <BsSearch className='h-6 w-6 mt-1 p-px md:block active:scale-[120%] md:hover:scale-[120%] cursor-pointer '/>
  const iconoCruz = <IoMdClose className='h-7 w-7 mt-1 pb-1 md:pb-px hover:scale-[120%]  '/>

  useEffect(() => {

    if(searchBar){
      inputRef.current.classList.add('w-full','lg:w-[70%]','opacity-100','visible')
      inputRef.current.classList.remove('w-0','invisible','opacity-0')
      inputRef.current.disabled = false
    } else {
      inputRef.current.classList.remove('w-full','lg:w-[70%]','opacity-100','visible')
      inputRef.current.classList.add('w-0','invisible','opacity-0')
      inputRef.current.disabled = true
    }

  }, [searchBar])

  return (
    <div className='flex justify-end items-center relative w-full h-full'>
      <input type="text" ref={inputRef} placeholder="Ingresa tu búsqueda..." className='w-0 mt-px invisible absolute font-light p-3 opacity-0 -right-2 h-10 rounded-3xl bg-neutral-200 dark:bg-neutral-800 transition-all duration-300'/>
      <button ref={buttonRef} onClick={handleSearchClick} className='z-20'>
          {searchBar ? iconoCruz : iconoBusqueda}
      </button>
    </div>
  )
}
