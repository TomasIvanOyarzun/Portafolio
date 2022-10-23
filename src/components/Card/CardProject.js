import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardProject = ({title, image, description}) => {
  return (
    <Card style={{ width: '18rem' }} data-aos="flip-left" >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <div><p>{description}</p></div>
        </Card.Text>
        <Button variant="primary">Ingresar</Button>
      </Card.Body>
    </Card>
  )
}

export default CardProject
