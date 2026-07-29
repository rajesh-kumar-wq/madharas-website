import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * A quiet field of drifting gold dust, rendered behind the hero copy.
 * Kept deliberately sparse and slow — ambiance, not spectacle.
 */
export default function ParticleField({ count = 260, className = '', color = 0xd4af37 }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const width = mount.clientWidth
    const height = mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100)
    camera.position.z = 12

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      color,
      size: 0.045,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    let frameId
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.6
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.6
    }
    window.addEventListener('mousemove', handleMouseMove)

    const clock = new THREE.Clock()
    const animate = () => {
      const t = clock.getElapsedTime()
      points.rotation.y = t * 0.02 + mouseX * 0.3
      points.rotation.x = mouseY * 0.15
      points.position.y = Math.sin(t * 0.15) * 0.3
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [count, color])

  return <div ref={mountRef} className={`pointer-events-none ${className}`} aria-hidden="true" />
}
