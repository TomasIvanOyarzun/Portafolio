import React from 'react'
import style from '../styles/Landing.module.css'
import programmer2 from '../image/programmer2.png'

const Landing = () => {

  return (
    <div className={style.container}>
       <div className={style.sub_container}>
           <div className={style.div_one}>
            <h2>{`<Tomas Ivan`}</h2>
            <h2>{` Oyarzun  />`}</h2>
            <h2 className={`${style.parpadea} ${style.text}`} >|</h2>
            <div style={{width: '30%' , height:'4px', background: 'rgb(247, 185, 71)'}}></div><div>
              <p><a className={style.likedin}>likedin</a>{' | '} <a className={style.likedin}>github</a></p>
              <a href='#contact'><button>contact me</button></a>
            </div>
    
            </div>
           
           <div className={style.div_two}>
            <p>INTRODUCTION</p>
            <h2>Full Stack Web Developer</h2>
            <p className={style.introduction}>Developer mainly in JavasCript, focused on web development</p>
            <span><a className={style.likedin} href='#about'>Learn more ⇊</a></span>
           </div>
           
          
          
          
       </div>
    </div>
  )
}

export default Landing
