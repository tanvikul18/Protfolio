import { ArrowUp } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className='py-12 px-4 relative bg-card border-t border-border mt-12 pt-8 flex flex-wrap justify-between '>
       <p className='text-sm text-muted-foreground'>&copy; {new Date().getFullYear()} Tanvi.co All Rights Limited</p>
    <a href="#hero" className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors'>
    <ArrowUp size={20}/>
    </a>
    </footer>
  )
}
