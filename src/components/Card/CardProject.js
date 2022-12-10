import React from 'react'
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SwitchContext from '../../context/SwitchContext';

const CardProject = ({title, image, description, link}) => {

  const {active , theme} = useContext(SwitchContext)
  return (
    <Card style={{ width: '18rem' , marginBottom: '20px'}} data-aos="flip-left" bg={active && theme.card}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <div><p>{description}</p></div>
        </Card.Text>
        <Button variant="primary" onClick={()=> window.open(`${link}`, '_blank')} >Ingresar</Button>
      </Card.Body>
    </Card>
  )
}

export default CardProject
