import { motion } from 'framer-motion'
import { useAnimations } from '../hooks/useAnimations'
import { Cpu, BarChart2, Users } from 'lucide-react'

const features = [
  {
    icon: <Cpu className="w-12 h-12 text-blue-600" />,
    title: 'AI-Powered Insights',
    description: 'Leverage advanced machine learning algorithms to gain valuable insights into your dealership\'s performance and customer behavior.',
  },
  {
    icon: <BarChart2 className="w-12 h-12 text-purple-600" />,
    title: 'Sales Optimization',
    description: 'Optimize your sales process with AI-driven recommendations and predictive analytics.',
  },
  {
    icon: <Users className="w-12 h-12 text-green-600" />,
    title: 'Enhanced Customer Experience',
    description: 'Provide personalized experiences to your customers with AI-powered chatbots and recommendation engines.',
  },
]

export default function Features() {
  const { ref, controls, variants } = useAnimations()

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={variants}
              className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

