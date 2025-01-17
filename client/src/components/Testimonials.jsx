import { motion } from 'framer-motion'
import { useAnimations } from '../hooks/useAnimations'
import { Card, CardContent } from '@mui/material'

const testimonials = [
  {
    quote: "RevAI has transformed our dealership. Our sales have increased by 30% since implementing their AI solution.",
    author: "John Doe",
    position: "Sales Manager, AutoMax"
  },
  {
    quote: "The insights provided by RevAI have been invaluable. We're now able to make data-driven decisions with confidence.",
    author: "Jane Smith",
    position: "CEO, CarHub"
  },
  {
    quote: "Our customer satisfaction scores have skyrocketed thanks to the personalized experiences enabled by RevAI.",
    author: "Mike Johnson",
    position: "Customer Experience Director, DriveTime"
  }
]

export default function Testimonials() {
  const { ref, controls, variants } = useAnimations()

  return (
    <section ref={ref} className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

