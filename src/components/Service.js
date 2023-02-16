import React, { useContext } from 'react'
import style from '../styles/Service.module.css'
import soluciones from '../image/soluciones.png'
import ideas from '../image/ideas.png'
import dev from '../image/desarrollo.png'
import SwitchContext from '../context/SwitchContext'
import AOS from 'aos'

const Service = () => {

   const {active, theme} = useContext(SwitchContext)

   React.useEffect(()=> {
      AOS.init()
    
    },[])

  return (
   <>
 
   <div className="particlesheader" >
    <div id='service'  className={style.container} style={{background: active && theme.service}}>
        
      
        <h2 style={{color : active && '#FFF'}}>Service</h2>
        <div style={{width: '10%' , height:'4px', background: '#2390BF'}}></div>
      <div  className={style.sub_div}>
        
         <div data-aos="flip-left" >
            <img src={soluciones} alt='diamond-icon'></img>
            <p>Design</p>
            <span style={{color : active && '#FFF'}}>Adaptación del diseño según lo solicitado, mejoras y aprendizaje durante el desarrollo del mismo.</span>
         </div>
         <div data-aos="flip-left" >
            <img src={ideas} alt='idea-icon'></img>
            <p>Ideas</p>
            <span style={{color : active && '#FFF'}}>Habilidad para crear muchas ideas y estrategias para tener un mejor desarrollo del proyecto.</span>
         </div>
         <div data-aos="flip-left" >
            <img src={dev} alt='dev-icon'></img>
            <p>Web Development</p>
           
            <span style={{color : active && '#FFF'}}>Habilidad desarrollo web de flujo completo, capacidad de aprender nuevas tecnologías solicitadas. </span>
         </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Service
