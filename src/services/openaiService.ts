import axios from 'axios';
import { Question } from '../types';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const API_URL = 'https://api.openai.com/v1/chat/completions';

export const testApiConnection = async (): Promise<boolean> => {
  if (!API_KEY) {
    console.error('OpenAI API key is not set');
    return false;
  }

  try {
    const response = await axios.post(
      API_URL,
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello" }],
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.status === 200;
  } catch (error) {
    console.error('Error testing API connection:', error);
    return false;
  }
};

export const updateApiKey = (newApiKey: string): void => {
  // In a real application, this would update the API key in a secure way
  console.log('API key updated');
};

// ... rest of the file remains unchanged

export const generateQuestions = async (topic: string, type: 'quiz' | 'survey', numQuestions: number, difficulty?: string): Promise<Question[]> => {
  // ... implementation remains the same
};

export const generateReport = async (quizId: string, answers: Record<string, string | string[]>): Promise<string> => {
  // Implement report generation logic here
  return "This is a generated report based on the quiz responses.";
};