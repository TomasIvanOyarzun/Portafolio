import React, { useState } from 'react'
import style from '../styles/Nav.module.css'
import menu from '../image/menu.png'
import x from '../image/cerrar.png'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  const [click, setClick] = useState(false)
   
  return (
    <nav className={style.nav}>
              <div className={style.nav_icon} onClick={()=> setClick(!click)}>
              <input type='image' src={click ? x : menu} className={style.nav_img} alt='menu'></input>
          </div>
            
            <div className={click ? style.nav_mobile : style.div_nav }>
              <li  className={style.li}><a style={{textDecoration: 'none', color: 'white'}} href='#about'>About</a></li>
              <li  className={style.li}><a style={{textDecoration: 'none', color: 'white'}} href='#project'>Project</a></li>
              <li  className={style.li}><a style={{textDecoration: 'none', color: 'white'}} href='#contact'>Contact</a></li>
            
            
        </div>
    </nav>
  )
}

export default Nav
