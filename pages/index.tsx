import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const Home: NextPage = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const width = 1080
    const height = 600

    const renderer = new THREE.WebGLRenderer()

    const elm = mountRef.current

    elm?.appendChild(renderer.domElement)

    renderer.setPixelRatio(window.devicePixelRatio)

    renderer.setSize(width, height)

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)

    const geometory = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshPhongMaterial({color: 0x73270ff})
    const box = new THREE.Mesh(geometory, material)
    box.position.z = -5;
    scene.add(box)


    const directionalLight = new THREE.DirectionalLight(0xffffff)
    directionalLight.position.set(1, 1, 1)

    scene.add(directionalLight)

    const tick = () => {
      box.rotation.y += 0.05
      box.rotation.z += 0.05
      box.rotation.x += 0.05
      renderer.render(scene, camera)

      requestAnimationFrame(tick)
    }

    tick()

  return () => {
    elm?.removeChild(renderer.domElement)
  }
  }, [])

  

  return (
    <div ref={mountRef}/>
  )
}

export default Home
