import React, { useEffect } from 'react'
import styles from '../styles/Project.module.css'
import dog from '../image/dog.png'
import AOS from 'aos'
import 'aos/dist/aos.css';
import node from '../image/node.png'
import sequelize from '../image/sequelize.png'
import react from '../image/react.png'
import redux from '../image/redux.png'
import postgres from '../image/postgres.png'

const Project = () => {

    useEffect(()=> {
       AOS.init()
    },[])
  return (
    <div id='project' className={styles.container}>
        <h1 style={{fontSize: '50px'}}>PROJECT DOG</h1>
        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className={styles.component}>
          <div className={styles.container_img}>
             <a href='https://pi-dogs-amber.vercel.app/' rel="noreferrer" target="_blank"><img className={styles.img} src={dog}></img></a>
          </div>

          <div className={styles.container_info}>
            <div className={styles.container_info_details}>
              <div className={styles.images}>
                 <img src={react}></img>
                 <img src={redux}></img>
                  <h2>REACT - REDUX</h2>
              </div>
              <div className={styles.details}>
                 <p>react and redux for the front-end part, although it is a simple app, the use of redux allowed me to use global states</p>
              </div>
              
            </div >
            <div className={styles.container_info_details}>
            <div className={styles.images}>
                 <img src={node}></img>
                 
                  <h2>NODE.JS</h2>
              </div>
              <div className={styles.details}>
                 <p>for the backend use node.js (Express) to still use both javascript and types-cript</p>
              </div>
              <div>
                
              </div>
            </div>
            <div className={styles.container_info_details}>
            <div className={styles.images}>
                 <img src={sequelize}></img>
                 
                  <h2>SEQUELIZE</h2>
              </div>
              <div className={styles.details}>
                 <p>The ORM I used was sequelize to manipulate my DB</p>
              </div>
              <div>
                
              </div>
            </div>
            <div className={styles.container_info_details}>
            <div className={styles.images}>
                 <img src={postgres}></img>
                 
                  <h2>POSTGRES-SQL</h2>
              </div>
              <div className={styles.details}>
                 <p>I chose postgres to manage my database, since I needed one that is relational</p>
              </div>
              <div>
                
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Project
