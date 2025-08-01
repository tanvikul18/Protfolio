import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const projects=[
    {
         id:1,
         title:"Text to Image AI",
         desc: "AI powered Text to Image converter using React, Tailwind ,ClipDrop API with RazorPay Integration.",
         image:"/projects/texttoimage.PNG",
         tags:["React","TailWindCSs","ClipDrop","MongoDB","NodeJs","RazorPay API"],
         demoUrl :"#",
         gitHubUrl:"https://github.com/tanvikul18/texttotimage-AI"
        },
    {
         id:2,
         title:"AI Fianance Paltform-Finora",
         desc: "Finace Platform with AI,Chart,Email Notifcation Mechanism.",
        image:"/projects/fiananced.png",
         tags:["React","TailWindCSs","MongoDB","NodeJs","RazorPay API"],
         demoUrl :"#",
         gitHubUrl:"https://github.com/tanvikul18/AIFiancePlatform"
    },
     {
         id:3,
         title:"Admin Dashboard",
         desc: "Admin Dashboard wirh MERN stack techonologies.",
          image:"/projects/admindasjhboard.PNG",
         tags:["React","CSS","Node Js","MongoDB","Express JS"],
         demoUrl :"#",
         gitHubUrl:"https://github.com/tanvikul18/mern-adminadashboard"
    },
     {
         id:4,
         title:"Netflix-Clone",
         desc: "Clone for populat OTT platform Netflix with Firebase/",
          image:"/projects/netflixclone.PNG",
         tags:["React","CSS3","Firebase"],
         demoUrl :"#",
         gitHubUrl:"https://github.com/tanvikul18/netflix-clone"
    },
     {
         id:5,
         title:"Interactive Quiz",
         desc: "Interactive Quiz designed with React,HTML,CSS animation effects.",
          image:"/projects/intera.PNG",
         tags:["React","HTML","CSS","CSS-animations"],
         demoUrl :"#",
         gitHubUrl:"https://github.com/tanvikul18/HTML5InteractiveAssignment"
    },
     {
         id:6,
         title:"Weather App",
         desc: "Find weather of any city through WeatherAPI.",
          image:"/projects/weatherapp.PNG",
         tags:["React","HTML","CSS","WeatherAPI"],
         demoUrl :"https://wather-app-basic-git-main-tanvikul18s-projects.vercel.app/",
         gitHubUrl:"https://github.com/tanvikul18/watherApp-basic"
    }
]
export default function ProjectSection() {
  return (
   <section id="projects" className='py-24 px-4 relative'>
       <div className='container mx-auto max-w-5xl'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Featured <span className='text-primary'>Projects</span></h2>
               <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                  Here are some of my recent projects. Each project was carefully crafted with attention to detail, performace and user experience.
               </p>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                     {
                        projects.map((project,key)=>(
                            <div key={key} className='gorup bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                                <div className='h-48 overflow-hidden'>
                                    <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' target="_blank"/>
                                </div>
                                <div className='p-6'>
                                   <div className='flex flex-wrap gap-2 mb-4'>
                                    {
                                        project.tags.map((tag,key)=>(
                                            <span className='px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground' target="_blank">{tag}</span>
                                        ))
                                    }
                                    </div>
                               
                                <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                                <p className='text-muted-foreground'>{project.desc}</p>
                                <div className='flex justify-between items-center'>
                                       <div className='flex space-x-3'>
                                        <a href={project.demoUrl} className='text-foreground/80 hover:text-praimary transition-colrs duration-300'>
                                            {" "}
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a href={project.gitHubUrl} target="_blank" className='text-foreground/80 hover:text-praimary transition-colrs duration-300'>
                                            <Github size={20}/>
                                        </a>
                                        </div>
                                </div>
                                 </div>
                            </div>
                        ))
                     }
               </div>
               <div className='text-center mt-12'>
                    <a className='cosmic-button w-fit flex items-center mx-auto gap-2' target="_blank" href="https://github.com/tanvikul18">
                        Checkout my Github <ArrowRight/>
                    </a>
               </div>
       </div> 
   </section>
  )
}
