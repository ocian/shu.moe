import * as PIXI from 'pixi.js'
import { useEffect, useRef, useState } from 'react'

export default function PagePixi() {
  const ref = useRef<HTMLDivElement>()

  useEffect(() => {
    const app = new PIXI.Application()
    if (ref.current) {
      ref.current.appendChild(app.view)
    }

    return () => {
      if (ref.current) {
        ref.current.removeChild(app.view)
      }
      app.destroy()
    }
  }, [])

  return <div ref={ref}>pixi</div>
}
