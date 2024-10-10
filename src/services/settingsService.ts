import { SystemSettings } from '../types';

// Mock data for system settings
let mockSystemSettings: SystemSettings = {
  maxQuestionsPerQuiz: 50,
  maxQuestionsPerSurvey: 30,
  defaultQuizTimeLimit: 30,
  allowGuestAccess: false,
};

export const getSystemSettings = async (): Promise<SystemSettings> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  return { ...mockSystemSettings };
};

export const updateSystemSettings = async (newSettings: SystemSettings): Promise<void> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  mockSystemSettings = { ...newSettings };
};