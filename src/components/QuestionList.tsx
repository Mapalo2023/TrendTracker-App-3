import React from 'react'
import { Question } from '../types'

interface QuestionListProps {
  questions: Question[]
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>
}

const QuestionList: React.FC<QuestionListProps> = ({ questions, setQuestions }) => {
  const handleQuestionChange = (index: number, updatedQuestion: Question) => {
    const newQuestions = [...questions]
    newQuestions[index] = updatedQuestion
    setQuestions(newQuestions)
  }

  const handleDeleteQuestion = (index: number) => {
    const newQuestions = questions.filter((_, i) => i !== index)
    setQuestions(newQuestions)
  }

  const handleAddOption = (questionIndex: number) => {
    const newQuestions = [...questions]
    newQuestions[questionIndex].options?.push('')
    setQuestions(newQuestions)
  }

  const handleDeleteOption = (questionIndex: number, optionIndex: number) => {
    const newQuestions = [...questions]
    newQuestions[questionIndex].options?.splice(optionIndex, 1)
    setQuestions(newQuestions)
  }

  return (
    <div className="question-list">
      {questions.map((question, index) => (
        <div key={index} className="question-card">
          <div className="question-header">
            <h3>Question {index + 1}</h3>
            <button onClick={() => handleDeleteQuestion(index)} className="btn btn-danger">Delete</button>
          </div>
          <input
            type="text"
            value={question.text}
            onChange={(e) => handleQuestionChange(index, { ...question, text: e.target.value })}
            placeholder="Enter question text"
            className="question-text-input"
          />
          <select
            value={question.type}
            onChange={(e) => handleQuestionChange(index, { ...question, type: e.target.value as Question['type'] })}
            className="question-type-select"
          >
            <option value="multiple-choice">Multiple Choice</option>
            <option value="likert-scale">Likert Scale</option>
            <option value="open-ended">Open Ended</option>
          </select>
          {question.type === 'multiple-choice' && (
            <div className="options-list">
              {question.options?.map((option, optionIndex) => (
                <div key={optionIndex} className="option-item">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => {
                      const newOptions = [...(question.options || [])]
                      newOptions[optionIndex] = e.target.value
                      handleQuestionChange(index, { ...question, options: newOptions })
                    }}
                    placeholder={`Option ${optionIndex + 1}`}
                    className="option-input"
                  />
                  <button onClick={() => handleDeleteOption(index, optionIndex)} className="btn btn-danger">Delete</button>
                </div>
              ))}
              <button onClick={() => handleAddOption(index)} className="btn btn-secondary">Add Option</button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default QuestionList