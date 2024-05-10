import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { ContenedorProductos } from './components/Productos/ContenedorProductos/ContenedorProductos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {ContenedorDetalle} from './components/Productos/ContenedorDetalle/ContenedorDetalle';

function App() {

  return (
      <Router>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/productos' element={<ContenedorProductos />} />
          <Route path='/productos/:categoryId/:filterId' element={<ContenedorProductos />}></Route>
          <Route path='/productos/:prodId' element={<ContenedorDetalle />}></Route>
        </Routes>

      </Router>
  )
}

export default App;
