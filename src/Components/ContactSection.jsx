import React, { useState } from 'react'
import { Linkedin, LinkedinIcon, Mail, Phone,Map, Facebook,Send } from 'lucide-react'
import { cn } from '../lib/utils'
import { toast } from 'react-toastify';
export default function ContactSection() {
    const [FormData,setFormData]=useState({})
   const[isSubmitting,setIsSubmitting]=useState(false)

   const handleChange=(e)=>{
    const{name,value}=e.target;
    console.log(name,value)
     setFormData((prev)=>({...prev,[name]:value}))
   }
    const handleSubmit=(e)=>{
            e.preventDefault();
            console.log("Form Values",FormData);
            setIsSubmitting(true)
            setTimeout(()=>{
                     toast.success("Thank you for message. I will get back you you soon!")
                      setIsSubmitting(false)
                      FormData.name = "";
                      FormData.email = "";
                      FormData.message = "";
            },1500)
             
    }
  return (
    <section id="contact" className='py-24 px-4 relative bg-secondary/30'>
    <div className='container mx-auto max-w-5xl'>
     <h2 className='text-3xl md:text-4xl text-center font-bold mb-4 text-center'>Get In <span className='text-primary'>Touch</span></h2>
     <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
        Have a project in mind or want to collaborate? Feel free to reach out.
        I am always open to diccussing new oppurtunities.
     </p>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div className='space-y-8'>
            <h3 className='text-2xl font- mb-6'>Contact information</h3>
            <div className='space-y-6 justify-center'>
                <div className='flex items-start space-x-4'>
                    <div className='p-3 rounded-full bg-primary/10'>
                           <Mail className='h-6 w-6 text-primary'/>
                    </div>
                    <div>
                        <h4 className='font-medium text-left'>Email</h4>
                        <a href="mailto:tanvi18.kulkarni@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>tanvi18.kulkarni@gmail.com</a>
                    </div>
                </div>
                <div className='flex items-start space-x-4'>
                    <div className='p-3 rounded-full bg-primary/10'>
                           <Phone className='h-6 w-6 text-primary'/>
                    </div>
                    <div>
                        <h4 className='font-medium text-left'>Phone</h4>
                        <a href="tel: +91 893980414"className='txet-muted-foreground hover:text-primary transition-colors'>+91 8939830414</a>
                    </div>
                </div>
                 <div className='flex items-start space-x-4'>
                    <div className='p-3 rounded-full bg-primary/10'>
                           <Map className='h-6 w-6 text-primary'/>
                    </div>
                    <div>
                        <h4 className='font-medium text-left'>Location</h4>
                        <a className='text-muted-foreground hover:text-primary transition-colors'>Pune, Maharashtra, India</a>
                    </div>
                </div>
            </div>
             <div className='mt-8'>
              <h4 className='font-medium mb-4'>Connect With Me</h4>
              <div className='flex space-x-4 justify-center'>
                      <a href="#" target="_blank">
                        <Linkedin/>
                      </a>
                       <a href="#" target="_blank">
                        <Facebook/>
                      </a>
              </div>
            </div>
        </div>
        <div className='bg-card p-8 rounded-lg shadow-xs'>
              <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
              <form className='space-y-6' onSubmit={handleSubmit}>
                 <div>
                    <label htmlFor='name' className='block text-sm mb-2 font-medium'>Your Name:</label>
                     <input type="text" id="name" name="name" value={FormData.name} onChange={handleChange} required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='Tanvi Kulkarni...'/>
                 </div>
                 <div>
                    <label htmlFor='email' className='block text-sm mb-2 font-medium'>Your Email:</label>
                     <input type="email" id="email" name="enail" value={FormData.email} onChange={handleChange} required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='john@gmail.com...'/>
                 </div>
                 <div>
                    <label htmlFor='message' className='block text-sm mb-2 font-medium'>Your Message:</label>
                     <input type="textarea" id="message" name="message" value={FormData.message} onChange={handleChange} required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none' placeholder="Hello, I'd like to talk about"/>
                 </div>
                 <button type='submit' disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer",
                     
                 )}>{isSubmitting ? "Sending..." : "Send Messaage"}<Send size={16}/></button>
              </form>
        </div>
     </div>
        </div>

    </section>
  )
}
