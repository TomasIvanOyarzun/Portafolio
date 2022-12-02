import React, { useState } from 'react'
import style from '../styles/Nav.module.css'
import menu from '../image/menu.png'
import x from '../image/cerrar.png'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from 'react';
import SwitchContext from '../context/SwitchContext';



const NavB = () => {
  const [click, setClick] = useState(false)
  const {active, handleOnClick, theme} = useContext(SwitchContext)
   console.log(theme)
  return (
  

   <div className={style.nav}>
    <Navbar  bg={active ? 'dark' : 'light'} expand="lg" variant={active && 'dark'}>
    <Container fluid>
      <Navbar.Brand href="#">Tomas Oyarzun</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#inicio">Inicio</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <NavDropdown title="Links" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#service">Service</NavDropdown.Item>
            <NavDropdown.Item href="#about">
              About me
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#project">
              Projects
            </NavDropdown.Item>
          
          </NavDropdown>
          <Nav.Link href="#contact">{'oyarzuntomas99@gmail.com'.toLowerCase()}</Nav.Link>
          
      
        </Nav>
        <Nav>
           
            <Form>
            <Form.Check
            isValid={true}
        type="switch"
        id="custom-switch"
        label="DarkMode"
        onClick={handleOnClick}
        color='light'
      />
    
    </Form>
           
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
   
  )
}

export default NavB
