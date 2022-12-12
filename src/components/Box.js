import { useLoader } from '@react-three/fiber'
import texture from '../image/JavaScript_Logo.webp'
import {TextureLoader} from 'three/src/loaders/TextureLoader'
import React from 'react'
import { RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

const Box = () => {
    const repeatX = 1
    const repeatY = 1
    const colorMap = useLoader( TextureLoader ,texture)
    colorMap.wrapS = THREE.RepeatWrapping 
    colorMap.wrapT = THREE.RepeatWrapping
    colorMap.repeat.set(repeatX,repeatY)
  return (
    <mesh scale={1.0}>
        <boxBufferGeometry attach='geometry' args={[3,3,3]}></boxBufferGeometry>
        <meshPhysicalMaterial map={colorMap}/>

        <RoundedBox args={[1, 1, 1]} radius={0.05} smoothness={4}>
  <meshPhongMaterial color="#f3f3f3" wireframe />
       </RoundedBox>
    </mesh>
  )
}

export default Box