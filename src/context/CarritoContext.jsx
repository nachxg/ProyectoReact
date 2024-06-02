import { createContext, useContext, useState, useEffect } from 'react'

const carritoContext = createContext();

export const { Provider } = carritoContext;

export const useCarritoContext = () => {
    return useContext(carritoContext);
}

const CarritoContextProvider = ({ children }) => {
    const [cantidadTotal, setCantidadTotal] = useState(0);
    const [carrito, setCarrito] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const carrito = JSON.parse(localStorage.getItem("carrito"));
        if(carrito){
            setCarrito(carrito);
            setCantidadTotal(carrito.reduce((acc, elem) => acc + elem.cantidad, 0));
            setPrecioTotal(carrito.reduce((acc, elem) => acc + elem.precio * elem.cantidad, 0));
        }
    }, [])
    
    const agregarAlCarrito = (item, cantidad) => {

        setCantidadTotal(cantidadTotal + cantidad);
        setCarrito(...carrito, { item, cantidad });
        setPrecioTotal(precioTotal + item.precio * cantidad)
        
        let nuevoCarrito = []

        if(estaEnCarrito(item.id)){
            nuevoCarrito = carrito.map((elem) => {
                if(elem.id === item.id){
                    return { ...elem, cantidad: elem.cantidad + cantidad };
                } else {
                    return elem;
                }
            });
            setCarrito(nuevoCarrito);
        } else {
            nuevoCarrito = [...carrito, {...item, cantidad}]
            setCarrito(nuevoCarrito);
        }  

        guardarEnLocalStorage(nuevoCarrito)
    }

    const estaEnCarrito = (id) => {
        return carrito.find(elem => elem.id === id);
    }

    const borrarItem = (id, precio, cantidad) => {
        setPrecioTotal(precioTotal - precio * cantidad);
        setCantidadTotal(cantidadTotal - cantidad);

        const carritoFiltrado = carrito.filter(elem => elem.id !== id)
        setCarrito(carritoFiltrado);
        guardarEnLocalStorage(carritoFiltrado);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setPrecioTotal(0);
        guardarEnLocalStorage([]);
    }

    const actualizarCantidad = (id, nuevaCantidad) => {

    }

    const alternarVisible = () => {
        setVisible(!visible);
    }

    const guardarEnLocalStorage = (carrito) => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }

    const contextValue = {
        cantidadTotal,
        agregarAlCarrito,
        carrito,
        estaEnCarrito,
        borrarItem,
        precioTotal,
        vaciarCarrito,
        visible,
        alternarVisible,
    };

    return <Provider value={contextValue}>{children}</Provider>
};

export default CarritoContextProvider;