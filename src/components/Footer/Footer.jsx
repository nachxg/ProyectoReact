import { FaRecordVinyl } from "react-icons/fa6";


export const Footer = () => {
  return (
    <div className='text-sm w-full gap-1 h-10 bg-neutral-200 dark:bg-neutral-900 flex justify-center items-center pt-14 pb-5 mt-auto'>
       VStore <FaRecordVinyl/> by <a href="https://github.com/nachxg/ProyectoReact" className="underline cursor-pointer">Nacho Gimenez </a>
    </div>
  )
}
