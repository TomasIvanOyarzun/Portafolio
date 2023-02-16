import React  from 'react'
import style from '../styles/Nav.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from 'react';
import SwitchContext from '../context/SwitchContext';
import logo from '../image/logo.png'


const NavB = () => {

  const {active, handleOnClick} = useContext(SwitchContext)
   console.log(active)
  return (
  

   <div className={style.nav}>
    <Navbar  bg={active ? 'dark' : 'light'} expand="lg" variant={active && 'dark'} style={{backgroundColor: 'transparent'}}>
    <Container >
      <Navbar.Brand href="#">
      <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
        Tomas Oyarzun</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100%' }}
          
        >
          <Nav.Link href="#inicio">Inicio</Nav.Link>
          <Nav.Link href="#service">Service</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#project">Projects</Nav.Link>
          
          
         
         
          
      
        </Nav>
        <Nav 

          style={{ maxHeight: '100%' }}  >

<Nav.Link href='https://github.com/TomasIvanOyarzun' rel="noreferrer" target="_blank" ><i class="bi bi-github"></i></Nav.Link>
<Nav.Link href='https://www.linkedin.com/in/tomas-ivan-oyarzun-148263211/' rel="noreferrer" target="_blank" ><i class="bi bi-linkedin"/></Nav.Link>
         {active ?  <Nav.Link href="#inicio"><i class="bi bi-moon-stars-fill"></i></Nav.Link>  : <Nav.Link href="#contact"><i class="bi bi-brightness-high-fill"></i></Nav.Link> 
         
         }
        <NavDropdown  id="navbarScrollingDropdown">
            <NavDropdown.Item  >Aspect : <strong>{active ? 'dark' : 'light'}</strong></NavDropdown.Item>
            <NavDropdown.Item id='light' onClick={handleOnClick}>
            <i  class="bi bi-brightness-high-fill"></i>
             light
            </NavDropdown.Item>
           
            <NavDropdown.Item id='dark'  onClick={handleOnClick}>
            <i  class="bi bi-moon-stars-fill"></i>
              Dark
            </NavDropdown.Item>
          
          </NavDropdown>
      
           
           
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
   
  )
}

export default NavB
