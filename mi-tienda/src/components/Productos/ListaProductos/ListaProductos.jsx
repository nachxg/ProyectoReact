import { Producto } from '../Producto/Producto'

export const ListaProductos = ({productos}) => {
  return (
    <div className='w-full grid grid-cols-5 auto-rows-auto gap-5 pt-3'>
      {productos.map(producto => <Producto key={producto.id} {...producto} />)}
    </div>
  )
}
