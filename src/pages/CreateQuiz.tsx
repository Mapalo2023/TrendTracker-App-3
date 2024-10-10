import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { generateQuestions } from '../services/openaiService'
import QuestionList from '../components/QuestionList'
import { Question } from '../types'
import LoadingBar from '../components/LoadingBar'

const CreateQuiz: React.FC = () => {
  const [topic, setTopic] = useState('')
  const [questions, setQuestions] = useState<Question[]>([])
  const [numQuestions, setNumQuestions] = useState(5)
  const [difficulty, setDifficulty] = useState('medium')
  const [isLoading, setIsLoading] = useState(false)
  const [quizTitle, setQuizTitle] = useState('')
  const [quizDescription, setQuizDescription] = useState('')
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleGenerateQuestions = async () => {
    if (topic) {
      setIsLoading(true)
      setError(null)
      try {
        const generatedQuestions = await generateQuestions(topic, 'quiz', numQuestions, difficulty)
        setQuestions(generatedQuestions)
        if (generatedQuestions.length === 0) {
          setError('No questions were generated. Please try again with a different topic or settings.')
        }
      } catch (error) {
        console.error('Error generating questions:', error)
        setError(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.')
      } finally {
        setIsLoading(false)
      }
    } else {
      setError('Please enter a topic before generating questions.')
    }
  }

  // ... rest of the component remains the same

  return (
    <div className="create-quiz">
      <h2>Create a New Quiz</h2>
      {/* ... other JSX ... */}
      
      <div className="ai-generation-section">
        <h3>AI-Powered Question Generation</h3>
        {/* ... form inputs ... */}
        <button onClick={handleGenerateQuestions} disabled={isLoading} className="btn btn-primary">
          {isLoading ? 'Generating...' : 'Generate Questions'}
        </button>
        {isLoading && <LoadingBar />}
        {error && <div className="error-message">{error}</div>}
      </div>
      
      <QuestionList questions={questions} setQuestions={setQuestions} />
      
      {/* ... rest of the JSX ... */}
    </div>
  )
}

export default CreateQuiz