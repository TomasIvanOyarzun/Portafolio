import React from 'react'
import style from '../styles/Landing.module.css'



const Landing = () => {

  return (
    <div id='inicio' className={style.container}>
       <div className={style.sub_container}>
            <h5>Hola mi nombre es</h5>
            <h2 style={{color: 'rgb(233, 48, 48)'}}>{`<Tomas Oyarzun   />`}</h2> 
            <h2  className={`${style.parpadea} ${style.text}`}>|</h2>
            <h2>Soy un Full-Stack Developer</h2> 
            
             <h3>Me estoy enfocalizando en aplicaciones web Además,</h3>
             <h3>estoy finalizando el bootcamp de #SoyHenry.</h3>
           
       </div>
    </div>
  )
}

export default Landing
