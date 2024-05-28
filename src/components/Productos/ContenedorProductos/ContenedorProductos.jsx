import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory, getFilterList } from '../../../mock/MockData'
import { ListaProductos } from '../ListaProductos/ListaProductos'
import { Filtros } from '../Filtros/Filtros'
import { useParams, Link } from 'react-router-dom'
import { PiVinylRecordLight } from 'react-icons/pi';

export const ContenedorProductos = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId, filterId } = useParams();

  useEffect(() => {
    if (categoryId && filterId) {
      getProductsByCategory(categoryId, filterId)
        .then(response => {
          setProductos(response)
          setLoading(false)
        })
        .catch(error => {
              console.error(error)
        });
    } else {
      getProducts()
        .then(response => {
          setProductos(response)
          setLoading(false)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }, [categoryId, filterId])

  const [listas, setListas] = useState([])

  useEffect(() => {
    getFilterList()
      .then(response => {
        setListas(response)
      })
      .catch(error => {
        console.error(error)
      });
  }, [])
  
  return (
    <div className='md:px-6 pt-6 w-full flex justify-center items-end flex-col h-auto'>
      { loading ? <PiVinylRecordLight className='absolute inset-y-[50%] inset-x-[46%] animate-spin size-20' /> : <>
        <div className='flex flex-row items-center w-full'>
        <div className='flex flex-row 
        *:dark:bg-neutral-950 *:mx-2 *:py-1 *:text-neutral-500 *:px-3 *:shadow-md *:text-lg *:font-light *:bg-neutral-100 *:rounded-full *:cursor-pointer'>
          
          <Link to={'/productos/genero/pop'} className=' active:text-black dark:active:text-white'>pop</Link>
          <Link to={'/productos/genero/rnb'} className='active:text-black dark:active:text-white'>r&b</Link>
          <Link to={'/productos/genero/experimental'} className='active:text-black dark:active:text-white'>experimental</Link>
          <Link to={'/productos/genero/artpop'} className='active:text-black dark:active:text-white'>art-pop</Link>
          <Link to={'/productos/genero/alternativo'} className='active:text-black dark:active:text-white'>alternativo</Link>
        
        </div>
        <h1 className='ml-auto px-3 md:px-0 text-right text-5xl w-fit font-normal'>productos</h1>
      </div>
       
      <ListaProductos productos={productos} /> </>}
    </div>
  )
}
