/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAppContext } from '../../context/appContext'
export default function Hands2(props) {
  const { colorArr } = useAppContext()
  const { nodes, materials } = useGLTF('/models/Hands2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hands2.geometry}
        material={materials.Yellow}
        position={[-0.07, 139.8, 0]}
      >
        <meshPhysicalMaterial
          color={colorArr[4]}
          reflectivity={1}
          roughness={0.8}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/Hands2.glb')
