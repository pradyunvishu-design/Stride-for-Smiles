import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  value: number
  prefix?: string
  suffix?: string
}

export function CountUp({ value, prefix = '', suffix = '' }: CountUpProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setDisplayValue(value)
      return undefined
    }

    const duration = 1100
    const start = performance.now()

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.round(value * eased))

      if (progress < 1) {
        frameRef.current = window.requestAnimationFrame(animate)
      }
    }

    frameRef.current = window.requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [value])

  return (
    <span>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  )
}
