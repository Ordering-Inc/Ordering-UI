import { useState, useRef, useEffect } from 'react'

/**
 * Hook for Intersection Observer API (observe changes in the intersection of a target elemen based on viewport)
 */

export function useIntersectionObserver () {
  const [isObserved, setIsObserved] = useState(false)

  const $element = useRef(null)

  useEffect(() => {
    const loadPollyFill = async () => {
      try {
        await import('intersection-observer')
      } catch (error) {
        console.log(error)
      }
    }
    if (!window.IntersectionObserver) loadPollyFill()

    const observer = new window.IntersectionObserver(entries => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setIsObserved(true)
        observer.disconnect()
      }
    })
    observer.observe($element.current)
  }, [$element])

  return [$element, isObserved]
}
