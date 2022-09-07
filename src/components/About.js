import React, { useEffect } from 'react'
import style from '../styles/About.module.css'
import black from '../image/black.png'
import AOS from 'aos'
import 'aos/dist/aos.css';
import node from '../image/node.png'
import react from '../image/react.png'
import redux from '../image/redux.png'
import postgres from '../image/postgres.png'
import sequelize from '../image/sequelize.png'
import mongo from '../image/mongo-DB.png'
import html from '../image/html.png'
import js from '../image/js.png'
import css from '../image/css.png'
import typeScript from '../image/typeScript.png'
const About = () => {
    
    useEffect(()=> {
        AOS.init()
      
      },[])
  return (
    <div id='about' className={style.container}>
      <div style={{height: '10%' , marginTop: '80px'}}><h1>ABOUT ME</h1></div>
      <div style={{width: '14%' , height:'4px', background: 'rgb(247, 185, 71)'}}></div>
      <div className={style.container_one}>
        <div >
          <img src={black} className={style.img}></img>
        </div>

        <div style={{width: '70%'}}>
       
         <p data-aos="flip-left" style={{fontSize: '20px'}}>I am a Full-Stack JS Web developer, I keep learning new technologies,
             I really like both the Front-End and the Back-End, every day I learn
              something new, which helps me in my development as a programmer</p>
        </div>
      </div>

      <div className={style.container_two}>
        <div style={{width: '40%' , display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
           <div data-aos="flip-left" className={style.containers}>
            <img src={js}></img>
            <div className={style.container_name}><p>JavaScript</p></div>
            
           </div>
           <div data-aos="flip-left" className={style.containers}>
           <img  src={html}></img>
           <div className={style.container_name}><p>Html</p></div>
           </div>
           <div data-aos="flip-left" className={style.containers}>
           <img src={css}></img>
           <div className={style.container_name}><p>Css</p></div>
           </div>
           <div data-aos="flip-left" className={style.containers}>
           <img src={react}></img>
           <div className={style.container_name}><p>React</p></div>
           </div>
           <div data-aos="flip-left" className={style.containers}>
           <img src={redux}></img>
           <div className={style.container_name}><p>Redux</p></div>
           </div>
        </div>

        <div style={{width: '40%' , display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
           <div data-aos="flip-right" className={style.containers} >
            <img src={node}></img>
           <div className={style.container_name}><p>Node.js</p></div>
           </div>
           <div data-aos="flip-right"  className={style.containers}>
            <img src={sequelize}></img>
           <div className={style.container_name}><p>Sequelize-ORM</p></div>
           </div>
           <div data-aos="flip-right" className={style.containers} >
             <img src={mongo}></img>
           <div className={style.container_name}><p>Mongoose-ODM</p></div>
           </div>
           <div data-aos="flip-right" className={style.containers}>
             <img src={postgres}></img>
           <div className={style.container_name}><p>Postgres-SQL</p></div>
           </div>
           <div data-aos="flip-right" className={style.containers}>
             <img src={typeScript}></img>
           <div className={style.container_name}><p>typeScript</p></div>
           </div>
        </div>
      </div>

      <div className={style.container_three}>

      </div>
    </div>
  )
}

export default About
