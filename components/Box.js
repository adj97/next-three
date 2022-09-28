import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box as NativeBox } from '@react-three/drei'
import { withRouter } from 'next/router'

function Box(props) {
  const mesh = useRef()

  // this one doesn't
  console.log(props.router)
  // returns null

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <NativeBox
      args={[1, 1, 1]}
      {...props}
      ref={mesh}
      scale={active ? [6, 6, 6] : [5, 5, 5]}
      onClick={() => {
        setActive(!active)
        props.router.push(props.link)
      }}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <meshStandardMaterial
        attach="material"
        color={hovered ? '#2b6c76' : '#720b23'}
      />
    </NativeBox>
  )
}

export default withRouter(Box)