import React, { useState, useEffect, useRef } from 'react';
import { PiMoon, PiSun } from "react-icons/pi";

export const Modo = ({showInOptions}) => {
  
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const buttonRef = useRef(null)

  const handleThemeChange = () => {
    setTheme(!theme);
  };

  const bodyRef = useRef(document.body);

  useEffect(() => {

    if (theme) {
      bodyRef.current.classList.add("dark");
    } else {
      bodyRef.current.classList.remove("dark");
    }

    localStorage.setItem('theme', JSON.stringify(theme));

  }, [theme]);

  useEffect(() => {
      showInOptions ? buttonRef.current.classList.remove('hidden') : buttonRef.current.classList.add('hidden');
  }, [showInOptions])
  

  const sunIcon = <PiSun className='h-8 w-8 md:h-7 md:w-7 p-px mt-1 hover:scale-[120%] cursor-pointer transition-transform hover:rotate-90'/>
  const moonIcon = <PiMoon className='h-8 w-8 md:h-7 md:w-7 p-px mt-1 hover:scale-[120%] cursor-pointer transition-transform hover:-rotate-90'/>
    
  return (
    <>
        <button ref={buttonRef} onClick={handleThemeChange} className='hidden md:block'>
            {theme ? sunIcon : moonIcon}
        </button>
    </>
  );
};