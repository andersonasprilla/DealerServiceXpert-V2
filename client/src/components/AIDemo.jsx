import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAnimations } from '../hooks/useAnimations'
import { Button } from '@mui/material'
import { Input } from '@mui/material'
import { Car, DollarSign, Users, BarChart } from 'lucide-react'

const demoQuestions = [
    "What's the best-selling car this month?",
    "How can I improve customer satisfaction?",
    "What's the optimal pricing for the new SUV model?",
    "Which customers are most likely to buy electric vehicles?"
]

export default function AIDemo() {
    const { ref, controls, variants } = useAnimations()
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate AI processing
        setTimeout(() => {
            setAnswer(generateAnswer(question))
            setIsLoading(false)
        }, 1500)
    }

    const generateAnswer = (q) => {
        // This is a simple simulation. In a real app, this would call an AI service.
        const answers = [
            "Based on our AI analysis, the CRV Touring is currently our best-selling car this month. Its eco-friendly features and advanced technology are major selling points.",
            "Our AI suggests focusing on personalized follow-ups, streamlining the purchase process, and offering virtual test drives to improve customer satisfaction.",
            "The AI recommends a base price of $34,999 for the new SUV model, with premium features that can push the price up to $45,999 for higher-end trims.",
            "The AI has identified that customers aged 30-45, with high income, living in urban areas, and with a history of eco-friendly purchases are most likely to buy electric vehicles."
        ]
        return answers[Math.floor(Math.random() * answers.length)]
    }

    return (
        <section ref={ref} className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    className="text-4xl font-bold text-center mb-12"
                >
                    Experience AI-Powered Insights
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold mb-4">Ask DSxpertAI</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <Input
                                type="text"
                                placeholder="Type your question here..."
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                className="w-full"
                            />
                            <Button type="submit" disabled={isLoading} className="w-full">
                                {isLoading ? 'Processing...' : 'Get AI Insight'}
                            </Button>
                        </form>
                        <div className="bg-white p-4 rounded-lg shadow-md min-h-[100px]">
                            <h4 className="font-semibold mb-2">AI Response:</h4>
                            <p className="text-gray-700">{answer || "Your AI-powered answer will appear here."}</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                        className="grid grid-cols-2 gap-4"
                    >
                        {demoQuestions.map((q, index) => (
                            <Button
                                key={index}
                                variant="outline"
                                className="h-auto py-4 px-6 text-left flex items-start"
                                onClick={() => setQuestion(q)}
                            >
                                {index === 0 && <Car className="mr-2 flex-shrink-0" />}
                                {index === 1 && <Users className="mr-2 flex-shrink-0" />}
                                {index === 2 && <DollarSign className="mr-2 flex-shrink-0" />}
                                {index === 3 && <BarChart className="mr-2 flex-shrink-0" />}
                                <span>{q}</span>
                            </Button>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

