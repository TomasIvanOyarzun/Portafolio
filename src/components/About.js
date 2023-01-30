import React, { useEffect } from 'react'
import style from '../styles/About.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import node from '../image/node.png'
import react from '../image/react.png'
import redux from '../image/redux.png'
import postgres from '../image/postgres.png'
import sequelize from '../image/sequelize.png'
import mongo from '../image/mongo-DB.png'
import html from '../image/html.png'
import js from '../image/js.png'
import css from '../image/css.png'
import typeScript from '../image/typeScript.png'
import { useContext } from 'react';
import SwitchContext from '../context/SwitchContext';
import face from '../image/face.png'
import Three from './three/Three';

import { Container, Row , Col, Button } from 'react-bootstrap'
const About = () => {
    
  const {active , theme} = useContext(SwitchContext)
    useEffect(()=> {
        AOS.init()
      
      },[])
  return (
    <div id='about' className={style.container} style={{background: active && theme.about}}>
        <Container>
         <Col xs={12} md={12} xl={12}>
          <div className={active ? style.sub_container_dark : style.sub_container}>

         
         <div style={{height: '10%' , marginTop: '80px'}}><h1>ABOUT ME</h1></div>
      <div style={{width: '14%' , height:'4px', background: '#2390BF'}}></div>
      
      <div className={style.container_one}>
        <div >
          <img height='30%'  src={face} className={style.img}></img>
        </div>

        <div style={{width: '100%'}}>
       
         <p className={style.div_p} data-aos="flip-left" >Soy <strong>desarrollador web Full-Stack JS</strong>,
         , estoy constantemente comprometido con mi aprendizaje y evolución en el campo de la tecnología. Mi afinidad por ambos aspectos del desarrollo web, tanto Front-End como Back-End,
         actualmente sigo aprendiendo nuevas tecnologías, para poder agrandar mi stack, con el objetivo a que me ayude en mi desarrollo como programador.</p>
        </div>
      </div>

      <div className={style.container_two}>
    
        <div style={{width: '40%' , display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
          {[{name: 'JavaScript', img: js},{name: 'Html', img: html},{name: 'Css', img: css},{name : 'React', img: react},{name: 'Redux', img : redux}]
           .map(el => (
            <div data-aos="flip-left" className={style.containers}>
            <img className={active ? style.filter  : style.noFilter } src={el.img}></img>
            <div className={style.container_name}><p>{el.name}</p></div>
            
           </div>
           ))
          }
          
        </div>

        <div style={{width: '40%' , display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>

          {[{name: 'Node.js', img: node},{name: 'Sequelize', img: sequelize},{name: 'Mongoose', img: mongo},{name : 'Postgres', img: postgres},{name: 'TypeScript', img : typeScript}]
          .map(el => (
            <div data-aos="flip-right" className={style.containers} >
            <img className={active ? style.filter  : style.noFilter } src={el.img}></img>
           <div className={style.container_name}><p>{el.name}</p></div>
           </div>
          ))}
          
        </div>
      </div>
      </div>
         </Col>

      </Container>
    </div>
  )
}

export default About