import React from 'react'
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SwitchContext from '../../context/SwitchContext';

const CardProject = ({title, image, description, link, tecnologia}) => {

  const {active , theme} = useContext(SwitchContext)
  return (
    <Card style={{ marginBottom: '20px', }} data-aos="flip-left" bg={active && theme.card}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{height : 225 , maxHeight: 225}}>
          <div><p >{description}</p></div>
          <ul>
            {tecnologia.map(el => (
              <li>{el}</li>
            ))}
          </ul>
        </Card.Text>
        <Button style={{background : '#111', border : 0}} variant="primary" onClick={()=> window.open(`${link}`, '_blank')} >Ingresar</Button>
      </Card.Body>
    </Card>
  )
}

export default CardProject
