
import React from 'react'
import { ArrowDown } from 'lucide-react'
export default function HeroSection() {
  return (
    <section id="hero" className='realtive min-h-screen flex flex-col justify-center px-4'>
      <div className='container max-w-4xl mx-auto text-center z-10'>
          <div className='space-y-6 '>
                   <h1 className='text-4xl md:text-6xl font-bold tracking-light'>
                     <span className=''>
                        Hi, I am 
                     </span>
                     <span className='text-primary'> Tanvi</span>
                     <span className='text-gradient ml-2'> Kulkarni</span>
                   </h1>
                   <p className="text-lg md:text-xl text-muted-foregorund max-2-2xl mx-auto">I create a stellar web experience with modern tecnologies. Specializing in the front end development, I  build interfaces that are both beautiful and functional.</p>
                    <div>
                        <a href="#projects" className='cosmic-button'>
                            View my Work
                        </a>
                        </div> 
          
          </div>

      </div>
      <div className='absolute bottom-8 left-1/2 transform-translatex-1/2  flex flex-col items-center '>
        <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
        <ArrowDown className='h-5 w-5 text-primary'/>
      </div>
    </section>
  )
}
