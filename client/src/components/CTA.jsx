import { motion } from 'framer-motion'
import { useAnimations } from '../hooks/useAnimations'
import { Button } from '@mui/material'

export default function CTA() {
  const { ref, controls, variants } = useAnimations()

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-4xl font-bold mb-6"
        >
          Ready to Revolutionize Your Dealership?
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          Join the AI revolution and take your dealership to the next level. Get started with RevAI today!
        </motion.p>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Schedule a Demo
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

