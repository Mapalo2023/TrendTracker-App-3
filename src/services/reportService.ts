import { Question } from '../types';

interface Report {
  id: string;
  title: string;
  type: 'quiz' | 'survey';
  createdAt: string;
}

// Mock data for quizzes and surveys
const mockReports: Report[] = [
  { id: '1', title: 'JavaScript Basics Quiz', type: 'quiz', createdAt: '2023-05-15T10:00:00Z' },
  { id: '2', title: 'Customer Satisfaction Survey', type: 'survey', createdAt: '2023-05-16T14:30:00Z' },
  { id: '3', title: 'Python for Beginners Quiz', type: 'quiz', createdAt: '2023-05-17T09:15:00Z' },
];

export const getQuizzes = async (): Promise<Report[]> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockReports.filter(report => report.type === 'quiz');
};

export const getSurveys = async (): Promise<Report[]> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockReports.filter(report => report.type === 'survey');
};

export const getQuizReport = async (quizId: string): Promise<string> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return `
    <h4>Quiz Report for ${quizId}</h4>
    <p>This is a mock report for the quiz. In a real application, this would contain detailed analytics about the quiz performance.</p>
    <ul>
      <li>Total Participants: 50</li>
      <li>Average Score: 75%</li>
      <li>Highest Score: 95%</li>
      <li>Lowest Score: 45%</li>
    </ul>
  `;
};

export const getSurveyReport = async (surveyId: string): Promise<string> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return `
    <h4>Survey Report for ${surveyId}</h4>
    <p>This is a mock report for the survey. In a real application, this would contain detailed analytics about the survey responses.</p>
    <ul>
      <li>Total Respondents: 100</li>
      <li>Completion Rate: 85%</li>
      <li>Average Time to Complete: 5 minutes</li>
    </ul>
  `;
};