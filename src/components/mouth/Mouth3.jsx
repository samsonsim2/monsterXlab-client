/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAppContext } from '../../context/appContext'
export default function Mouth3(props) {
  const { colorArr } = useAppContext()
  const { nodes, materials } = useGLTF('/models/Mouth3.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mouth3.geometry}
        material={materials.Red}
        position={[0, 237.21, 160.53]}
      >
        <meshPhysicalMaterial
          color={colorArr[2]}
          reflectivity={1}
          roughness={0.8}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/Mouth3.glb')
