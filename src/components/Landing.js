import React from 'react'
import style from '../styles/Landing.module.css'
import programmer2 from '../image/programmer2.png'

const Landing = () => {

  return (
    <div className={style.container}>
       <div className={style.sub_container}>
           <h1>Tomas</h1>
          <img className={style.img} src={programmer2}></img>
          
          <h1>Ivan Oyarzun</h1>
       </div>
    </div>
  )
}

export default Landing
