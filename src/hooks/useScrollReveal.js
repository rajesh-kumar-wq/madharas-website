import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Reveals children of the referenced container on scroll using GSAP.
 * @param {Object} opts
 * @param {string} opts.selector - CSS selector (within the container) of elements to reveal.
 * @param {number} opts.stagger - stagger between elements in seconds.
 * @param {number} opts.y - initial y offset in px.
 * @param {number} opts.duration - animation duration in seconds.
 */
export function useScrollReveal({ selector = '.reveal-item', stagger = 0.12, y = 48, duration = 1 } = {}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = containerRef.current?.querySelectorAll(selector)
      if (!targets || targets.length === 0) return

      gsap.set(targets, { opacity: 0, y })

      ScrollTrigger.batch(targets, {
        start: 'top 85%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration,
            stagger,
            ease: 'power3.out',
          }),
      })
    }, containerRef)

    return () => ctx.revert()
  }, [selector, stagger, y, duration])

  return containerRef
}

export default useScrollReveal
