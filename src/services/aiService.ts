import { Question } from '../types'

// This is a mock implementation. In a real application, this would call an AI API.
export const generateQuestions = async (
  topic: string,
  type: 'quiz' | 'survey',
  numQuestions: number = 5,
  difficulty: string = 'medium'
): Promise<Question[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  const questions: Question[] = []

  for (let i = 0; i < numQuestions; i++) {
    if (type === 'quiz') {
      questions.push({
        text: `${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} question about ${topic}: ${i + 1}`,
        type: 'multiple-choice',
        options: ['Option A', 'Option B', 'Option C', 'Option D']
      })
    } else {
      const questionTypes: Question['type'][] = ['multiple-choice', 'likert-scale', 'open-ended']
      const randomType = questionTypes[Math.floor(Math.random() * questionTypes.length)]

      questions.push({
        text: `Survey question about ${topic}: ${i + 1}`,
        type: randomType,
        options: randomType === 'multiple-choice' ? ['Option A', 'Option B', 'Option C', 'Option D'] : undefined
      })
    }
  }

  return questions
}