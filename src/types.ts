export interface Question {
  text: string
  type: 'multiple-choice' | 'likert-scale' | 'open-ended'
  options?: string[]
}

export interface SystemSettings {
  maxQuestionsPerQuiz: number;
  maxQuestionsPerSurvey: number;
  defaultQuizTimeLimit: number;
  allowGuestAccess: boolean;
}