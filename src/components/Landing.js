import React from 'react'
import style from '../styles/Landing.module.css'
import Three from './three/Three'




const Landing = () => {
    const dispositivo = navigator.userAgent || navigator.vendor || window.opera;
    console.log(dispositivo)
  return (
    <div id='inicio' className={style.container}>
       { !/android/i.test(dispositivo) &&  <Three />}
         
       <div className={style.sub_container}>
       
            <h5>Hola mi nombre es</h5>
            <h2 style={{color: 'rgb(233, 48, 48)'}}>{`<Tomas Oyarzun/>`}</h2> 
            
            <div>
            <h2 className={style.escribiendo}>Soy
Full Stack Developer
</h2> 
            </div>
            
           
       </div>
    </div>
  )
}

export default Landing
