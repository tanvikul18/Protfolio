import React from 'react'
import ThemeToggle from '../Components/ThemeToggle'
import Starbackground from '../Components/Starbackground'
import NavBar from '../Components/NavBar'
import HeroSection from '../Components/HeroSection'
import AboutSection from '../Components/Aboutsection'
import SkillsSection from '../Components/SkillsSection'
import ProjectSection from '../Components/ProjectSection'
import ContactSection from '../Components/ContactSection'
import Footer from '../Components/Footer'
export default function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden' id="home">
       {/*Theme Toogle */}
           <ThemeToggle/>

         {/*Background Effects */}
           <Starbackground/>
         {/*NavBar */}
            <NavBar/>
         {/*Main Content */}
          <main>
             <HeroSection/>
             <AboutSection/>
             <SkillsSection/>
             <ProjectSection/>
             <ContactSection/>
          </main>

         {/*Footer */}
                <Footer/>
    </div>
  )
}
