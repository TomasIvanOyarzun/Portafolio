import React from 'react'
import style from '../styles/Landing.module.css'
import Three from './three/Three'




const Landing = () => {
 
  return (
    <div id='inicio' className={style.container}>
      
         <Three/>
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
