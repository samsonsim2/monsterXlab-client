/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAppContext } from '../../context/appContext'
export default function Head5(props) {
  const { colorArr } = useAppContext()
  const { nodes, materials } = useGLTF('/models/Head5.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head_Cat.geometry}
        material={materials.Yellow}
        position={[0, 165.78, 0]}
      >
        <meshPhysicalMaterial
          color={colorArr[0]}
          reflectivity={1}
          roughness={0.8}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/Head5.glb')
