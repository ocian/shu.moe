import * as PIXI from 'pixi.js'
import { useEffect, useRef, useState } from 'react'

export default function PagePixi() {
  const ref = useRef<HTMLDivElement>()

  useEffect(() => {
    const app = new PIXI.Application()
    if (ref.current) {
      ref.current.appendChild(app.view)
    }

    PIXI.loader.add('bunny', 'bunny.png').load((loader, resources) => {
      // This creates a texture from a 'bunny.png' image.
      const bunny = new PIXI.Sprite(resources.bunny.texture)

      // Setup the position of the bunny
      bunny.x = app.renderer.width / 2
      bunny.y = app.renderer.height / 2

      // Rotate around the center
      bunny.anchor.x = 0.5
      bunny.anchor.y = 0.5

      // Add the bunny to the scene we are building.
      app.stage.addChild(bunny)

      // Listen for frame updates
      app.ticker.add(() => {
        // each frame we spin the bunny around a bit
        bunny.rotation += 0.01
      })
    })

    return () => {
      if (ref.current) {
        ref.current.removeChild(app.view)
      }
      app.destroy()
    }
  }, [])

  return <div ref={ref}>pixi</div>
}
