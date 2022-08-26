import React, { useState } from 'react'
import cv from '../image/cv.png'
import cv2 from '../image/cv2.png'
import style from '../styles/Cv.module.css'

const Cv = () => {
     const [click, setClick] = useState(false)
    const handleOnClick = () => {
          setClick(!click)
    }
  return (
    <>
    <input style={{width: '80px', height:'80px'}} className={style.position} type='image' src={cv} alt='curriculum-vitae' onClick={handleOnClick}></input>
    {click && <div className={`${style.container} ${style.position_div}`}>
        <h3>Curriculum vitae</h3>
        <img  style={{width: '80px', height: '80px'}} src={cv2} alt='cv-icon'></img>
        <button className={style.button}>download</button>
    </div> }

    </>
  )
}

export default Cv
