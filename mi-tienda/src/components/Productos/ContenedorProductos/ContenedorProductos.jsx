import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory, getFilterList } from '../../../mock/MockData'
import { ListaProductos } from '../ListaProductos/ListaProductos'
import { Filtros } from '../Filtros/Filtros'
import { useParams, Link } from 'react-router-dom'

export const ContenedorProductos = () => {

  const [productos, setProductos] = useState([])
  const { categoryId, filterId } = useParams();

  useEffect(() => {
    if (categoryId && filterId) {
      getProductsByCategory(categoryId, filterId)
        .then(response => {
          setProductos(response) })
        .catch(error => {
              console.error(error)
        });
    } else {
      getProducts()
        .then(response => {
          setProductos(response)
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
      <div className='flex flex-row items-center w-full'>
      <Link to={'/productos/genero/pop'} className='relative mx-2 z-20 py-1 text-neutral-500 active:text-black px-3 shadow-md text-lg font-light bg-neutral-100 rounded-full flex flex-row items-center justify-between gap-2 cursor-pointer'>
        pop
      </Link>
      <Link to={'/productos/genero/rnb'} className='relative z-20 mx-2 py-1 text-neutral-500 active:text-black px-3 shadow-md text-lg font-light bg-neutral-100 rounded-full flex flex-row items-center justify-between gap-2 cursor-pointer'>
        r&b
      </Link>
      <Link to={'/productos/genero/experimental'} className='relative mx-2 z-20 py-1 text-neutral-500 active:text-black px-3 shadow-md text-lg font-light bg-neutral-100 rounded-full flex flex-row items-center justify-between gap-2 cursor-pointer'>
        experimental
      </Link>
      <Link to={'/productos/genero/artpop'} className='relative z-20 mx-2 py-1 text-neutral-500 active:text-black px-3 shadow-md text-lg font-light bg-neutral-100 rounded-full flex flex-row items-center justify-between gap-2 cursor-pointer'>
        art-pop
      </Link>
      <Link to={'/productos/genero/alternativo'} className='relative z-20 mx-2 py-1 text-neutral-500 active:text-black px-3 shadow-md text-lg font-light bg-neutral-100 rounded-full flex flex-row items-center justify-between gap-2 cursor-pointer'>
        alternativo
      </Link>
        <h1 className='ml-auto px-3 md:px-0 text-right text-5xl w-fit font-normal'>productos</h1>
      </div>
      <ListaProductos productos={productos} />
    </div>
  )
}
