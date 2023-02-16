import React from 'react'
import Card from '../Card/CardProject'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import portafolio from '../../image/portafolio.png'
import cellStore from '../../image/cellStore.jpg'
import dog from '../../image/dog.png'
import tresBien from '../../image/tresBien.jpg'

import styles from './SliderCard.module.css'
const arrayCard = [{title: 'Tres Bien E-commerce', image: tresBien, description: 'Ecommerce indumentaria, metodologia utilizada Scrum.', tecnologia : ['react' , 'node', 'typescript', 'mongoose',' Auth0 2.0', 'Material UI'], link : 'https://tresbien.vercel.app/'},{title: 'Portafolio', image: portafolio, description : 'Portafolio personal de programador, deployado en Netlify' , tecnologia: [ 'React', 'Bootstrap', 'Three.js', 'Aos', 'emailJs'] },
{title: 'CellStore', image: cellStore, description : 'Proyecto grupal , ecommerce celulares, metodologia utilizada Scrum.', tecnologia: ['react', 'react-redux',' mongoose', 'mongoDB',' express', 'JWT'], link : 'https://cellstore-c94xwe73i-tomasivanoyarzun.vercel.app/'},
{title: 'FetchDog', image: dog, description : 'App de razas de perro,  deployado en vercel y render ', tecnologia: [ 'react-typescript', 'redux toolkit', 'react-router-dom', 'mongoose', 'JWT', 'Material UI'], link: 'https://front-dog-app.vercel.app/'}]

const SliderCard = () => {

 
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

     
  return (
    <div className={styles.card}>
      <Carousel responsive={responsive} infinite={true} autoPlaySpeed={1000}  >
         {arrayCard.map((el,index) => {
            return (
                <Card key={index} title={el.title}
                 image= {el.image}
                 description = {el.description}
                 link = {el.link}
                 tecnologia = {el.tecnologia}
                />
            )
         })}
     </Carousel>
    </div>
  )
}

export default SliderCard
