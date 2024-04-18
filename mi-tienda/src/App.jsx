import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Novedades } from './components/Novedades/Novedades';
import { Productos } from './components/Productos/Productos';

function App() {

  return (
      <div className='text-black max-w-screen h-fit bg-fixed bg-neutral-200 flex justify-start flex-col items-center dark:text-white dark:bg-neutral-900 dark:bg-blend-multiply'>

        <Navbar />
        <Novedades msj="Acá se mostraran las novedades de la página." />
        <Productos />

      </div>
  )
}

export default App;
