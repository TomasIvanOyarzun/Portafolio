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
        <h1 style={{fontSize: '50px'}}>PROJECTs</h1>
       
        <div style={{background: 'rgb(140, 139, 139)' , width: '80%', height: '80%'}} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className={styles.container_mobil}  id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active ">
      <img className={styles.img_carrusel} src={pokemon}  alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 >First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item  ">
      <img className={styles.img_carrusel}   src={dog_app}   alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
       
    </div>
  )
}

export default Project
