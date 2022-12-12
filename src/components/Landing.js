import React from 'react'
import style from '../styles/Landing.module.css'
import {Canvas, extend} from '@react-three/fiber'
import { Cloud, Effects, Extrude, Sparkles } from '@react-three/drei'
import {UnrealBloomPass} from 'three-stdlib'
import Box from './Box'
import { OrbitControls, Stars } from '@react-three/drei'

extend({UnrealBloomPass})
const Landing = () => {
 
  return (
    <div id='inicio' className={style.container}>
       <Canvas shadows gl={{antialias : false}}>
          <color attach='background' args={['#202030']}/>
          <OrbitControls autoRotate enableZoom={false}/>
          <Stars/>
          <ambientLight intensity={0.5}/>
          <spotLight position={[10,15,10]} angle={0.3}/>
          <Box/>
          <hemisphereLight intensity={0} color={'red'}  />
          <Sparkles count={200} scale={[20,20,10]} size={1} speed={0.01}/>
          <fog attach={'fog'} args={['#202030',5,25]}/>
          <Cloud
          opacity = {0.1}
          speed={0.1}
          width={30}
          depth={0.1}
          segments={40}
          />

          <Effects disableGamma>
            <unrealBloomPass threshold={1} strength={2} radius={2.0} />
          </Effects> 
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
