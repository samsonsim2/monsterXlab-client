/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAppContext } from '../../context/appContext'
export default function Mouth4(props) {
  const { colorArr } = useAppContext()
  const { nodes, materials } = useGLTF('/models/Mouth4.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mouth4.geometry}
        material={materials.Red}
        position={[7.23, 227.78, 112.49]}
        rotation={[0.21, 0, 0]}
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

useGLTF.preload('/models/Mouth4.glb')
