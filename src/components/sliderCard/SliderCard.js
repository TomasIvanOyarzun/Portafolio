import React from 'react'
import Card from '../Card/CardProject'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import portafolio from '../../image/portafolio.jpg'
import cellStore from '../../image/cellStore.jpg'
import pokemon from '../../image/pokemonApp.jpg'
import dog from '../../image/dog.jpg'
import tresBien from '../../image/tresBien.jpg'
const arrayCard = [{title: 'Tres Bien E-commerce', image: tresBien, description: 'Ecommerce indumentaria, react , node, typescript, mongoose, Auth0 2.0, Material UI', link : 'https://tresbien.vercel.app/'},{title: 'Portafolio', image: portafolio, description : 'Portafolio personal de programador, React, Bootstrap components, deployado en Netlify'  },
{title: 'CellStore', image: cellStore, description : 'Proyecto grupal , ecommerce celulares, react, react-redux, mongoose, mongoDB, express, JWT, etc', link : 'https://cellstore-c94xwe73i-tomasivanoyarzun.vercel.app/'},
{title:'Pokemon APP', image: pokemon, description: 'pokedex , buscar pokemones, react , express, sequelize, postgres  (no se uso librerias de estilos)'},
{title: 'Dog APP', image: dog, description : 'buscar razas de perro , react, react-redux, react-router-dom, sequelize, express, (no se uso librerias de estilos)', link: 'https://github.com/TomasIvanOyarzun/PiDogs'}]

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
    <div>
      <Carousel responsive={responsive} infinite={true} autoPlaySpeed={1000}>
         {arrayCard.map((el,index) => {
            return (
                <Card key={index} title={el.title}
                 image= {el.image}
                 description = {el.description}
                 link = {el.link}
                />
            )
         })}
     </Carousel>
    </div>
  )
}

export default SliderCard
