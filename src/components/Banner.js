import { Container, Row , Col, Button } from 'react-bootstrap'
import astronauta from '../assets/img/astronauta.png'
const Banner = () => {



   
  return (
    <section id='inicio' className='banner'>
    <Container>
        <Row className='align-items-center'>
            <Col xs={12} md={6} xl={7}>
                <span className='tagline'>Bienvenido a mi Portafolio</span>
               
                 <h1>Soy Tomas Oyarzun</h1>
                 <div  style={{width: '82%'}}><h1 className='escribiendo'>Desarrollador Web</h1></div>
                <p>
                Como desarrollador de aplicaciones web, estoy comprometido a entregar soluciones de alta calidad
                 con el uso de las últimas tecnologías y un enfoque metódico en el diseño y la
                  programación. Tengo una gran capacidad de aprendizaje y siempre estoy dispuesto a enfrentar nuevos
                   desafíos y mejorar mis habilidades para cumplir con las expectativas del mercado.
                </p>
                <button className="button"><span>Let’s Connect</span></button>
            </Col>
            <Col xs={12} md={6} xl={5} >
                <img width='100%' src={astronauta} alt='astronauta-img' />
            </Col>
        </Row>
    </Container>
</section>

  )
}

export default Banner