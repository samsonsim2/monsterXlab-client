/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAppContext } from '../../context/appContext'
export default function Eye4(props) {
  const { colorArr } = useAppContext()
  const { nodes, materials } = useGLTF('/models/Eye4.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.89, 299.58, 129.45]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Eye4_1.geometry}
          material={nodes.Eye4_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Eye4-White'].geometry}
          material={materials.White}
        />
        <mesh castShadow receiveShadow geometry={nodes['Eye4-Black'].geometry}>
          <meshPhysicalMaterial color={colorArr[1]} reflectivity={1} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Eye4-Black_1'].geometry}
        >
          <meshPhysicalMaterial color={colorArr[1]} reflectivity={1} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Eye4.glb')
