import { Producto } from '../Producto/Producto'

export const ListaProductos = ({productos}) => {
  return (
    <div className='w-full grid xl:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 auto-rows-auto gap-5 p-10 xl:p-0 xl:pt-3'>
      {productos.map(producto => <Producto key={producto.id} {...producto} />)}
    </div>
  )
}
