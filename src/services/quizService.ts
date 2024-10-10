import { Question } from '../types';
import { generateQuestions, generateReport } from './openaiService';

// Mock data for quizzes
const mockQuizzes: Record<string, { title: string; description: string; questions: Question[]; timeLimit: number }> = {
  '1': {
    title: 'JavaScript Basics',
    description: 'Test your knowledge of JavaScript fundamentals',
    timeLimit: 10, // 10 minutes
    questions: [
      {
        id: '1',
        text: 'What is JavaScript?',
        type: 'multiple-choice',
        options: ['A programming language', 'A markup language', 'A styling language', 'A database']
      },
      // ... other questions
    ]
  },
  '2': {
    title: 'Python for Beginners',
    description: 'Introduction to Python programming',
    timeLimit: 15, // 15 minutes
    questions: [
      {
        id: '1',
        text: 'What is Python?',
        type: 'multiple-choice',
        options: ['A programming language', 'A snake species', 'A text editor', 'An operating system']
      },
      // ... other questions
    ]
  }
};

export const getQuiz = async (quizId: string) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockQuizzes[quizId] || null;
};

export const createQuiz = async (topic: string, numQuestions: number, difficulty: string) => {
  const questions = await generateQuestions(topic, 'quiz', numQuestions, difficulty);
  const newQuizId = Date.now().toString();
  mockQuizzes[newQuizId] = {
    title: `Quiz on ${topic}`,
    description: `A ${difficulty} difficulty quiz about ${topic}`,
    timeLimit: 10,
    questions,
  };
  return newQuizId;
};

export const submitQuizResponses = async (quizId: string, answers: Record<string, string | string[]>) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Submitted answers:', answers);
  // In a real application, this would send the answers to a backend for processing
};

export const getQuizReport = async (quizId: string, answers: Record<string, string | string[]>) => {
  // Generate report using OpenAI
  const report = await generateReport(quizId, answers);
  return report;
};