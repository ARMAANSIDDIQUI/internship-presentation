"use client"

import { useEffect, useState, useMemo } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadFull } from "tsparticles" // or loadSlim if you prefer

const ReactiveBg = () => {
  const [init, setInit] = useState(false)

  // This will run only once, initializing the engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // You can load the full bundle or the slim one, it's up to you
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = (container) => {
    console.log("Particles container loaded", container)
  }

  // Memoize the options so they don't get recreated on every render
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#6366F1", "#22D3EE", "#A5B4FC"],
        },
        links: {
          color: "#6366F1",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 50,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  )

  // Render the particles component only after the engine is initialized
  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-0 z-0"
      />
    )
  }

  // Render nothing while the engine is loading
  return null
}

export default ReactiveBg