import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for scroll-triggered reveal animations
 * @param {Object} options - IntersectionObserver options
 * @returns {Object} - ref and isVisible state
 */
export const useScrollReveal = (options = {}) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once revealed, stop observing
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [options])

  return { ref, isVisible }
}

/**
 * Custom hook for staggered reveal animations
 * @param {number} itemCount - Number of items to animate
 * @param {number} staggerDelay - Delay between each item (ms)
 * @returns {Object} - ref and getItemProps function
 */
export const useStaggeredReveal = (itemCount, staggerDelay = 100) => {
  const { ref, isVisible } = useScrollReveal()
  
  const getItemProps = (index) => ({
    style: {
      transitionDelay: isVisible ? `${index * staggerDelay}ms` : '0ms',
    },
    className: `transition-all duration-500 ${
      isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8'
    }`,
  })

  return { ref, isVisible, getItemProps }
}

export default useScrollReveal
