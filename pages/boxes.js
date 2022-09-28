import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from '../components/Box'
import { useRouter } from 'next/router'

export default function BoxesPage() {
  // this one works
  const page_router = useRouter()
  console.log(page_router)
  return (
  <Canvas camera={{ position: [0, 0, 35] }}>
    <ambientLight intensity={2} />
    <pointLight position={[40, 40, 40]} />
    <Box position={[10, 0, 0]} router={page_router} link="/birds"/>
    <Box position={[-10, 0, 0]} router={page_router} link="/" />
    <Box position={[0, 10, 0]} router={page_router} link="/" />
    <Box position={[0, -10, 0]} router={page_router} link="/" />
    <OrbitControls />
  </Canvas>
  )
}
