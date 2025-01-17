import { motion } from 'framer-motion'
import { useAnimations } from '../hooks/useAnimations'
import { Button } from '@mui/material'

export default function Hero() {
  const { ref, controls, variants } = useAnimations()

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <motion.h1
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-5xl md:text-7xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          RevAI: Your Dealership's AI Assistant
        </motion.h1>
        <motion.p
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-xl md:text-2xl text-center mb-8 max-w-2xl mx-auto"
        >
          Revolutionize your dealership with cutting-edge AI technology. Boost sales, streamline operations, and enhance customer experience.
        </motion.p>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          className="flex justify-center"
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Get Started
          </Button>
        </motion.div>
      </div>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 z-0"
      />
    </section>
  )
}

