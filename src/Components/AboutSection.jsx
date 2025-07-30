import React from 'react'
import { cn } from '../lib/utils'
import { Briefcase, Code,User } from 'lucide-react'
export default function AboutSection() {
  return (
    <section id="about" className='py-24 relative px-4'>
       <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold m-12 text-center'>
                    About <span className='text-primary'>Me</span>
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                       <div className='space-y-6'>
                               <h3 className='text02xl font-semibold'>Passionate Front End Developer</h3>
                               <p className='text-muted foreground'>With over 5 years of experience in web developemnt, I specialize in creating responsive,accesible and performace web applications using modern technoogies.</p>
                                <p className='text-muted foreground'>I am passionate about creating elegant solutions to the complex problems and I am constantly learning new technologies and techniques to staty at the forefront fot he ever evolving web landscape.</p>
                              <div className='fex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                                 <a href="#contact" className='cosmic-button'>
                                     Get In Touch
                                 </a>
                                 <a href="/resume/Resume.pdf" download className={cn("px-6 py-3 rounded-full border border-primary text-primary",
                                  "hover:bg-primary/10 transition-colors duration-300")}>
                                     Download CV
                                 </a>
                              </div>
                       </div>
                       <div className='grid grid-cols-1 gap-6'>
                            <div className='gradient-border p-6 card-hover'>
                                  <div className='flex items-start gap-4'>
                                      <div className='p-3 rounded-full bg-primary/10'>
                                                 <Code className='h-6 w-6 text-primary'/>
                                      </div>
                                      <div className='text-left'>
                                             <h4 className='font-semibold text-lg'>Web Development</h4>
                                             <p className='text-muted-foreground'>Creating responsive websites and web applications with modern frameworks.</p>
                                      </div>
                                  </div>  
                            </div>
                            <div className='gradient-border p-6 card-hover'>
                               <div className='flex items-start gap-4'>
                                      <div className='p-3 rounded-full bg-primary/10'>
                                                 <User className='h-6 w-6 text-primary'/>
                                      </div>
                                      <div className='text-left'>
                                             <h4 className='font-semibold text-lg'>UI/UX Design</h4>
                                             <p className='text-muted-foreground'>Design intuitive design interfaces and seamless user experiences.</p>
                                      </div>
                                  </div>  
                            </div>
                            <div className='gradient-border p-6 card-hover'>
                                 <div className='flex items-start gap-4'>
                                      <div className='p-3 rounded-full bg-primary/10'>
                                                 <Briefcase className='h-6 w-6 text-primary'/>
                                      </div>
                                        <div className='text-left'>
                                             <h4 className='font-semibold text-lg'>Project Management</h4>
                                             <p className='text-muted-foreground'>Leading projects from conception to completion wit agile methodologies.</p>
                                      </div>
                                  </div>  
                            </div>
                       </div>
                </div>
       </div>
   </section>
  )
}
