import React from 'react'
import style from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={style.nav}>
       
            <li className={style.li}><a style={{textDecoration: 'none', color: 'white'}} href='#about'>About</a></li>
            <li className={style.li}><a style={{textDecoration: 'none', color: 'white'}} href='#project'>Project</a></li>
            <li className={style.li}><a style={{textDecoration: 'none', color: 'white'}} href='#contact'>Contact</a></li>
        
    </nav>
  )
}

export default Nav
