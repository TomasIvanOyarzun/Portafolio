import React from 'react'
import style from '../styles/Service.module.css'
import soluciones from '../image/soluciones.png'
import ideas from '../image/ideas.png'
import dev from '../image/desarrollo.png'
const Service = () => {
  return (
    <div className={style.container}>
        <h2>Service</h2>
        <div style={{width: '10%' , height:'4px', background: 'rgb(247, 185, 71)'}}></div>
      <div className={style.sub_div}>
         <div>
            <img src={soluciones} alt='diamond-icon'></img>
            <p>Desing</p>
            <span>Adaptation of the design according to what is requested, and learning during development</span>
         </div>
         <div>
            <img src={ideas} alt='idea-icon'></img>
            <p>Ideas</p>
            <span>Ability to create many ideas and strategies in order to have a better project development</span>
         </div>
         <div>
            <img src={dev} alt='dev-icon'></img>
            <p>Web Development</p>
            <span></span>
         </div>
      </div>
    </div>
  )
}

export default Service
