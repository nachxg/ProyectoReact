import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { ContenedorProductos } from './components/Productos/ContenedorProductos/ContenedorProductos';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ContenedorDetalle } from './components/Productos/ContenedorDetalle/ContenedorDetalle';
import { Footer } from './components/Footer/Footer'
import CarritoContextProvider from './context/CarritoContext';

function App() {

  return (
    <CarritoContextProvider>

      <Router>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/productos' element={<ContenedorProductos />} />
          <Route path='/productos/:categoryId/:filterId' element={<ContenedorProductos />}></Route>
          <Route path='/productos/:prodId' element={<ContenedorDetalle />}></Route>
          <Route path='*' element={<Navigate to='/' />}></Route>
        </Routes>

        <Footer/>
        
      </Router>

    </CarritoContextProvider>
  )
}

export default App;