import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils';
import {X,Menu} from  "lucide-react"
const navItems=[
    {name: 'Home',href:"#home"},
    {name: 'About',href:"#about"}, 
    {name: 'Skills',href:"#skills"},
    {name: 'Projects',href:"#projects"},
    {name: 'Contact',href:"#contact"}
]
export default function NavBar() {
    const[Scrolled,setIsScrolled]=useState(false);
    const[isMenuOpen,setIsMenuOpen]=useState(false);
    useEffect(()=>{
        const handleScroll=()=>{
             setIsScrolled(window.screenY > 10)
        }

        window.addEventListener('scroll',handleScroll)
        return()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])
  return (
   <nav className={cn("fixed w-full z-40 transition-full duration-300",
    Scrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
   )}>
      <div className='container flex items-center justify-between'>
            <a className='text-xl font-bold text-primary flex items-center'>
                <span className='relative z-10'>
                    {""}
                    <span className='text-glow text-foreground'>Tanvi</span> Protfolio
                </span>
            </a>
            {/* DEsktop Nav  */}
            <div className='hidden md:flex space-x-6'>
                {navItems.map((item,index)=>{
                    return <a href={item.href} key={index} className={cn("text-foreground/80 hover:text-primary",
                         "transition-colors duration-300"
                        )}>{item.name}</a>
                })}
            </div>

            {/*Mobile Nav */}
            <button className='md:hidden p-2 text-foreground z-50' onClick={()=>setIsMenuOpen((prev)=>!prev)}>{isMenuOpen ? <X size={24}/> : <Menu size={24}/>}</button>
            <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-200 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
            <div className='flex flex-col space-y-8 text-xl'>
                {navItems.map((item,index)=>{
                    return <a href={item.href} key={index} className={cn("text-foreground/80 hover:text-primary",
                         "transition-colors duration-300"
                        )} onClick={()=>setIsMenuOpen(false)}>{item.name}</a>
                })}
            </div>
            </div>
      </div>
   </nav>
  )
}
