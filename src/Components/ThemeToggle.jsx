import React, { useEffect, useState } from 'react'
import {Sun,Moon} from "lucide-react"
import { cn } from '../lib/utils.js';
export default function ThemeToggle() {
    const[isDarkMode,setIsDarkMode]=useState(false);
    useEffect(()=>{
      const theme = localStorage.getItem("theme");
      if(theme === "dark")
      {
           document.documentElement.classList.add("dark")
            setIsDarkMode(true)
      }
      else{
        document.documentElement.classList.remove("dark")
        setIsDarkMode(false)
      }
    },[])
    const handleMode=()=>{
       
        if(isDarkMode)
        {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme","light")
             setIsDarkMode(false)
        }
        else{
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme","dark")
             setIsDarkMode(true)
        }
    }
  return (
    <button onClick={handleMode} className={cn("fixed mx-sm:hidden top-5 right-3 z-50 p-1 rounded-full transition-colors duration-300",
        "focus:outline-hidden cursor-pointer"
    )}>
        {
            isDarkMode ? <Sun className='h-6 w-6 text-yellow-300'/> : <Moon className='h-6 w-6 text-blue-900'/>
        }
    </button>
  )
}
