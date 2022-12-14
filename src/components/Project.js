import React, { useEffect } from 'react'
import styles from '../styles/Project.module.css'
import SliderCard from './sliderCard/SliderCard';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useContext } from 'react';
import SwitchContext from '../context/SwitchContext';



const Project = () => {
 const {active, theme} = useContext(SwitchContext)
    useEffect(()=> {
       AOS.init()
    },[])
  return (
    <div id='project' className={styles.container} style={{background: active && theme.project}}>
    <h1 style={{fontSize: '50px', marginTop: '40px'}}>PROJECTs</h1>
    <div style={{width: '14%' , height:'4px', background: 'rgb(247, 185, 71)', marginBottom: '30px'}}></div>
    <div className={styles.sub_container}>
      <SliderCard/>
    </div>
  </div>
  )
}

export default Project
