"use client"

import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

type MagneticButtonProps =
  | (ButtonHTMLAttributes<HTMLButtonElement> & {
      href?: never
    })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string
    })

export const MagneticButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  MagneticButtonProps
>(function MagneticButton(props, ref) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, {
    stiffness: 300,
    damping: 20,
    mass: 0.5,
  })

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 20,
    mass: 0.5,
  })

  const {
    children,
    className,
    href,
    onMouseMove,
    onMouseLeave,
    ...rest
  } = props

  function handleMouseMove(
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) {
    const rect = event.currentTarget.getBoundingClientRect()

    const relativeX = event.clientX - rect.left - rect.width / 2
    const relativeY = event.clientY - rect.top - rect.height / 2

    x.set(relativeX * 0.15)
    y.set(relativeY * 0.15)

    onMouseMove?.(event as never)
  }

  function handleMouseLeave(
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) {
    x.set(0)
    y.set(0)

    onMouseLeave?.(event as never)
  }

  const content = href ? (
    <a
      ref={ref as React.ForwardedRef<HTMLAnchorElement>}
      href={href}
      className={className}
      {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  ) : (
    <button
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
      className={className}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  )

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        display: "inline-block",
      }}
    >
      {content as ReactNode}
    </motion.div>
  )
})
