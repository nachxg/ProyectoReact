import React from 'react'
import { PiMoon, PiSun } from "react-icons/pi";
import { useState, useEffect } from 'react';

export const Modo = () => {

    const [theme, setTheme] = useState("light")

    const handleThemeChange = () => {
        setTheme(prevTheme => prevTheme == "light" ? "dark" : "light")

        if (theme == "dark") {
            document.querySelector("body").classList.add("dark")
        } else {
            document.querySelector("body").classList.remove("dark")
        }

    }

    useEffect(() => {

      if(theme == "dark"){
        document.querySelector("body").classList.add("dark");
      } else {
        document.querySelector("body").classList.remove("dark");
      }

    }, [theme])
    

  return (
    <PiMoon onClick={handleThemeChange} className='h-7 w-7 p-[1px] mt-1 hover:scale-[120%] cursor-pointer'/>
  )
}
