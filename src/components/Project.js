import React, { useEffect } from 'react'
import styles from '../styles/Project.module.css'
import Carousel from 'react-bootstrap/Carousel';
import AOS from 'aos'
import 'aos/dist/aos.css';

import pokemon from '../image/pokemonApp.jpg'
import portafolio from '../image/portafolio.jpg'
import cellStore from '../image/cellStore.jpg'

const Project = () => {

    useEffect(()=> {
       AOS.init()
    },[])
  return (
    <div id='project' className={styles.container}>
    <h1 style={{fontSize: '50px', marginTop: '40px'}}>PROJECTs</h1>
    <div style={{width: '14%' , height:'4px', background: 'rgb(247, 185, 71)', marginBottom: '30px'}}></div>
    <div data-aos="flip-left" className={styles.sub_container}>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block "
          src={cellStore}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{color: 'black'}}>CellStore</h3>
          <p style={{color: 'black'}}>Ecommerce de celulares, Login, MercadoPago etc.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block "
          src={pokemon}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 style={{color: 'black'}}>Pokemon APP</h3>
          <p style={{color: 'black'}}>sequelize - postgres - express.js - react - redux</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={portafolio}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Portafolio</h3>
          <p>
            Portafolio Personal de Programador.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  </div>
  )
}

export default Project
