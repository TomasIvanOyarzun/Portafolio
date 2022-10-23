import React, { useEffect, useRef, useState } from 'react'
import style from '../styles/Contact.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import git from '../image/git.png'
import likedin from '../image/likedin.png'
import wsp from '../image/WhatsApp_icon.png'
import emailjs from '@emailjs/browser'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

const Contact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
       <h1>CONTACT</h1>
       <div style={{width: '11%' , height:'4px', background: 'rgb(247, 185, 71)', marginBottom: '20px'}}></div>
       <div className={style.sub_container}>
       <div className={style.sub_container_one_v2}>
        <div className={style.sub_container_one}>
          
           
            <p>En este momento estoy buscando un trabajo de Programador Jr, puedes contactarme a través de mis diferentes redes o también si lo deseas puedes enviarme un correo</p>
              
           <div className={style.contact}>
           <div><a href='https://github.com/TomasIvanOyarzun' rel="noreferrer" target="_blank"><img data-aos="zoom-in-up" src={git}></img></a></div>
           <div><a href='https://www.linkedin.com/in/tomas-ivan-oyarzun-148263211/' rel="noreferrer" target="_blank"><img data-aos="zoom-in-down" src={likedin}></img></a></div>
           <div><a href='https://wa.me/+5491133526366' rel="noreferrer" target="_blank"><img data-aos="zoom-in-left" src={wsp}></img></a></div>
           </div>
           
           <Button variant="primary" onClick={handleShow}>
        Descargar mi CV
      </Button>
           

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Gracías por Interesarse en mi Perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>Proximamente estare subiendo un archivo en la nube del CV</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Descargar
          </Button>
        </Modal.Footer>
      </Modal>
     
        </div>
        
        </div>
        <div className={style.sub_container_two}>
        {/* <form ref={referencia} onSubmit={sendEmail} data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className={style.form}>
            
            <input style={{ marginTop: '80px',marginBottom: '20px', height: '7%'}} type='text' placeholder='Name' name='user_name'></input>
            <input style={{marginBottom: '50px', height: '7%'}} type='text' placeholder='Email' name='user_email'></input>
            <textarea style={{marginBottom: '30px', height: '20%', width: '80%'}} placeholder='message' name='user_message'></textarea>
            <input className={style.button} type='submit' value='send'></input>
            
        </form> */}
          <div className={style.sub_div_form}>
       <Form class='w-100' ref={referencia} onSubmit={sendEmail} data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type='text' placeholder='Su nombre' name='user_name' />
        <Form.Text className="text-muted">
         Ingrese su nombre completo.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type='text' placeholder='Su email'  name='user_email' />
        <Form.Text className="text-muted">
          verifique que este bién escríto, gracías.
        </Form.Text>
      </Form.Group>



      <textarea style={{marginBottom: '30px', height: '20%', width: '100%'}} placeholder='message' name='user_message'></textarea>

      
      <Button variant="primary" type="submit" class='w-100' >
        Enviar
      </Button>
    </Form>
     </div>
        </div>
        </div>
    </div>
  )
}

export default Contact