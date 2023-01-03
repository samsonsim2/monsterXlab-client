/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAppContext } from '../../context/appContext'
export default function Head2(props) {
  const { colorArr } = useAppContext()
  const { nodes, materials } = useGLTF('/models/Head2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head_Bear.geometry}
        material={materials.Pink}
        position={[-0.55, 162.13, 0]}
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

useGLTF.preload('/models/Head2.glb')
