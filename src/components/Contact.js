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
import Toast from 'react-bootstrap/Toast';

import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import SwitchContext from '../context/SwitchContext';

const Contact = () => {
  const [msg, setMsg] = useState(false);
  const [show, setShow] = useState(false);
 const {theme, active} = useContext(SwitchContext)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const referencia = useRef()
  
  const [input, setInput] = useState({
    user_name : '',
    user_email : '',
    user_message: ''

  })
    useEffect(()=>{
     AOS.init()
    },[])
  
    const handleOnClick = (evt) => {
      setInput({
        ...input,
        [evt.target.name] : evt.target.value
      })
    }
    const sendEmail =  async (event) => {
       event.preventDefault()
       
      try {
        setInput({
          user_name : '',
          user_email : '',
          user_message: ''
      
        })
        await emailjs.sendForm('service_i1yk571', 'template_ed7ajqt', event.target, 'pn-mqcZK_Admgj3vT')
       
      } catch (error) {
        console.log(error)
      }
    }
    
  console.log(input)
  return (
    <>
    
    
    <div id='contact' className={style.container} style={{background: active && theme.contact}}>
    
       <h1>CONTACT</h1>
       <div style={{width: '11%' , height:'4px', background: 'rgb(247, 185, 71)', marginBottom: '20px'}}></div>
       <div className={style.sub_container}>
       <div className={style.sub_container_one_v2}>
        <div className={style.sub_container_one}>
          
           
            <p>En este momento estoy buscando un trabajo de Programador, puedes contactarme a través de mis diferentes redes o también si lo deseas puedes enviarme un correo</p>
              
           <div className={style.contact}>
           <div><a href='https://github.com/TomasIvanOyarzun' rel="noreferrer" target="_blank"><img data-aos="zoom-in-up" src={git} alt='github_logo'></img> </a></div>
           <div><a href='https://www.linkedin.com/in/tomas-ivan-oyarzun-148263211/' rel="noreferrer" target="_blank"><img data-aos="zoom-in-down" src={likedin} alt='likedin_logo'></img></a></div>
           <div><a href='https://wa.me/+5491133526366' rel="noreferrer" target="_blank"><img data-aos="zoom-in-left" src={wsp} alt='whatsapp_logo'></img></a></div>
           </div>
           
           <Button style={{background : '#E7BA13', border : 0}} variant="primary" onClick={handleShow}>
        Descargar mi CV
      </Button>
           

      <Modal style={{zIndex: '999999999'}} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Gracías por Interesarse en mi Perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ver en el siguiente enlace</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <a href='https://drive.google.com/file/d/1Z9aa4ZEj2bb_rhA86bgMMlDnzKj4pw4j/view' rel="noreferrer" target="_blank"><Button variant="primary" onClick={handleClose}>
            Ver
          </Button></a>
        </Modal.Footer>
      </Modal>
     
        </div>
        
        </div>
        <div className={style.sub_container_two}>
      
          <div className={style.sub_div_form}>
       <Form class='w-100' ref={referencia} onSubmit={sendEmail}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type='text' placeholder='Su nombre' name='user_name' onChange={handleOnClick} value={input.user_name} />
        <Form.Text className="text-muted">
         Ingrese su nombre completo.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type='text' placeholder='Su email'  name='user_email' onChange={handleOnClick} value={input.user_email} />
        <Form.Text className="text-muted">
          verifique que este bién escríto, gracías.
        </Form.Text>
        
      </Form.Group>



      <textarea style={{marginBottom: '30px', height: '20%', width: '100%'}} placeholder='message' name='user_message' onChange={handleOnClick} value={input.user_message}></textarea>

      
      <Button  disabled={Object.values(input).join('').length === 0 ? true : false} onClick={() => setMsg(true)} variant="primary" type="submit" class='w-100' >
        Enviarme Correo
      </Button>
    </Form>
 
     </div>
        </div>
        </div>

       
        <div className={style.msg_toast}>
    <Toast bg='success' onClose={() => setMsg(false)} show={msg} delay={5000} autohide>
       <Toast.Header>
         <img
           src="holder.js/20x20?text=%20"
           className="rounded me-2"
           alt=""
         />
         <strong className="me-auto">Correo Enviado</strong>
         <small>11 mins ago</small>
       </Toast.Header>
       <Toast.Body>Gracias , estare contestando a la brevedad</Toast.Body>
     </Toast>
    </div>
       
    
   
    </div>
    </>
  )
}

export default Contact