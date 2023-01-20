import React from 'react'
import Box from './Box'
import { OrbitControls, Stars } from '@react-three/drei'
import {Canvas, extend} from '@react-three/fiber'
import { Cloud, Effects, Sparkles } from '@react-three/drei'
import {UnrealBloomPass} from 'three-stdlib'

extend({UnrealBloomPass})
const Three = () => {
  return (
    <Canvas shadows gl={{antialias : false}}>
    <color attach='background' args={['#0F1921']}/>
    <OrbitControls autoRotate enableZoom={false}/>
    <Stars/>
    <ambientLight intensity={0.5}/>
    <spotLight position={[10,15,10]} angle={0.3}/>
    <Box/>
    <hemisphereLight intensity={0} color={'#000'}  />
    <Sparkles count={200} scale={[20,20,10]} size={1} speed={0.01}/>
  

    <Effects disableGamma>
      <unrealBloomPass threshold={1} strength={2} radius={2.0} />
    </Effects> 
  </Canvas>
  )
}

export default Three