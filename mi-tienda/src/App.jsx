import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Novedades } from './components/Novedades/Novedades';
import { Productos } from './components/Productos/Productos';


function App() {

  return (
    <div className= 'text-black max-w-screen h-fit bg-fixed bg-white bg-opacity-95 bg-blend-lighten bg-[url("./assets/fondo3.jpg")] bg-[length:800px_800px] bg-center bg-repeat flex justify-start flex-col items-center dark:text-white dark:bg-stone-950 dark:bg-blend-multiply transition-all duration-300'>
        
      <Navbar />
      <Novedades msj = "Acá se mostraran las novedades de la página."/>
      <Productos />

    </div>
  )
}

export default App;
