import { useLoader } from '@react-three/fiber'
import texture from '../image/JavaScript_Logo.webp'
import {TextureLoader} from 'three/src/loaders/TextureLoader'
import React from 'react'
import { RoundedBox } from '@react-three/drei'

const Box = () => {

    const colorMap = useLoader( TextureLoader ,texture)
  return (
    <mesh>
        <boxBufferGeometry attach='geometry' args={[3,3,3]}></boxBufferGeometry>
        <meshStandardMaterial map={colorMap}/>

        <RoundedBox args={[1, 1, 1]} radius={0.05} smoothness={4}>
  <meshPhongMaterial color="#f3f3f3" wireframe />
       </RoundedBox>
    </mesh>
  )
}

export default Box