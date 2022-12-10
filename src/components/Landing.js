import React from 'react'
import style from '../styles/Landing.module.css'
import {Canvas} from '@react-three/fiber'
import Box from './Box'
import { OrbitControls, Stars } from '@react-three/drei'
const Landing = () => {

  return (
    <div id='inicio' className={style.container}>
       <Canvas>
          <OrbitControls/>
          <Stars/>
          <ambientLight intensity={0.5}/>
          <spotLight position={[10,15,10]} angle={0.3}/>
          <Box/>
        </Canvas>

       <div className={style.sub_container}>
       
            <h5>Hola mi nombre es</h5>
            <h2 style={{color: 'rgb(233, 48, 48)'}}>{`<Tomas Oyarzun   />`}</h2> 
            <h2  className={`${style.parpadea} ${style.text}`}>|</h2>
            <h2>Soy un Full-Stack Developer</h2> 
            
             <h3>Me estoy enfocalizando en aplicaciones web Además,</h3>
             <h3>siempre dispuesto a aprender nuevas tecnologías.</h3>
           
       </div>
    </div>
  )
}

export default Landing
