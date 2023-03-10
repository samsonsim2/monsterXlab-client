/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAppContext } from '../../context/appContext'
export default function Body0(props) {
  const { colorArr } = useAppContext()
  const { nodes, materials } = useGLTF('/models/Body0.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body_SemiCircle.geometry}
        position={[0, 51.77, 0]}
      >
        <meshPhysicalMaterial
          color={colorArr[3]}
          reflectivity={1}
          roughness={0.8}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/Body0.glb')
