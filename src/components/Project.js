import React, { useEffect } from 'react'
import styles from '../styles/Project.module.css'
import SliderCard from './sliderCard/SliderCard';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useContext } from 'react';
import SwitchContext from '../context/SwitchContext';
import { Container } from 'react-bootstrap';




const Project = () => {
 const {active, theme} = useContext(SwitchContext)
    useEffect(()=> {
       AOS.init()
    },[])
  return (
    <section id='project' className={styles.container} style={{background: active && theme.project}}>
      
    <Container>
   
       <div className={active ? styles.sub_section_dark : styles.sub_section} >
    <h1 style={{fontSize: '50px', marginTop: '40px'}}>PROJECTs</h1>
    <div style={{width: '14%' , height:'4px', background: '#2390BF', marginBottom: '30px'}}></div>
    <p  data-aos="flip-left" >Como programador he desarrollado diversas gama de proyectos orientados a aplicaciones web,
    En general, me apasiona trabajar en proyectos desafiantes que involucren tecnología de vanguardia y me permitan seguir aprendiendo y creciendo como profesional. Me considero una persona proactiva, con gran capacidad para el trabajo en equipo y la resolución de problemas.</p>
    <div className={styles.sub_container} >
      <SliderCard/>
    </div>
    </div>
    </Container>
  </section>
  )
}

export default Project
