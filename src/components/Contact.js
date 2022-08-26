import React, { useEffect, useRef } from 'react'
import style from '../styles/Contact.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import git from '../image/git.png'
import likedin from '../image/likedin.png'
import wsp from '../image/WhatsApp_icon.png'
import emailjs from '@emailjs/browser'
const Contact = () => {

  const referencia = useRef()

    useEffect(()=>{
     AOS.init()
    },[])


    const sendEmail =  async (event) => {
       event.preventDefault()

      try {
        await emailjs.sendForm('service_i1yk571', 'template_ed7ajqt', event.target, 'pn-mqcZK_Admgj3vT')
         referencia.current.reset()
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div id='contact' className={style.container}>
        <h1 >CONTACT</h1>
        <form ref={referencia} onSubmit={sendEmail} data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className={style.form}>
            
            <input style={{ marginTop: '80px',marginBottom: '20px', height: '7%'}} type='text' placeholder='Name' name='user_name'></input>
            <input style={{marginBottom: '50px', height: '7%'}} type='text' placeholder='Email' name='user_email'></input>
            <textarea style={{marginBottom: '30px', height: '20%', width: '80%'}} placeholder='message' name='user_message'></textarea>
            <input className={style.button} type='submit' value='send'></input>
            
        </form>
        <div className={style.contact}>
           <a href='https://github.com/TomasIvanOyarzun'><img data-aos="zoom-in-up" src={git}></img></a>
           <a href='https://www.linkedin.com/in/tomas-ivan-oyarzun-148263211/' rel="noreferrer" target="_blank"><img data-aos="zoom-in-down" src={likedin}></img></a>
           <a href='https://wa.me/+5491133526366' rel="noreferrer" target="_blank"><img data-aos="zoom-in-left" src={wsp}></img></a>
        </div>
     
    </div>
  )
}

export default Contact
