import React from 'react'
import style from '../styles/Landing.module.css'
import programmer2 from '../image/programmer2.png'


const Landing = () => {

  return (
    <div id='inicio' className={style.container}>
       <div className={style.sub_container}>
          
            <h2>{`<Tomas Oyarzun   />`}</h2> 
            <h2 className={`${style.parpadea} ${style.text}`}>|</h2>
             <h3>Desarrollador Web Full Stack
              Frontend || Backend
             </h3>
           
       </div>
    </div>
  )
}

export default Landing
