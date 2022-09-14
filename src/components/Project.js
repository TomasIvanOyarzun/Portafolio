import React, { useEffect } from 'react'
import styles from '../styles/Project.module.css'

import AOS from 'aos'
import 'aos/dist/aos.css';


import pokemon from '../image/1.png'
import dog_app from '../image/2.png'

const Project = () => {

    useEffect(()=> {
       AOS.init()
    },[])
  return (
    <div id='project' className={styles.container}>
        <h1 style={{fontSize: '50px', marginTop: '40px'}}>PROJECTs</h1>
        <div style={{width: '14%' , height:'4px', background: 'rgb(247, 185, 71)', marginBottom: '30px'}}></div>
       
        <div  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className={styles.container_mobil}  id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div  className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active ">
      <img className={styles.img_carrusel} src={pokemon}  alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item  ">
      <img className={styles.img_carrusel}   src={dog_app}   alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div className="carousel-item">
      <img src="..." alt="..."/>
      <div className="carousel-caption d-none d-md-block">
       
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
       
    </div>
  )
}

export default Project
