import React from 'react'
import style from '../styles/Landing.module.css'
import programmer2 from '../image/programmer2.png'

const Landing = () => {

  return (
    <div className={style.container}>
       <div className={style.sub_container}>
           <p>{`<Tomas`}</p>
          <img className={style.img} src={programmer2}></img>
          
          <p>{`Ivan Oyarzun/>`}</p>
       </div>
    </div>
  )
}

export default Landing
