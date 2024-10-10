import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getQuizReport } from '../services/quizService';

const QuizCompleted: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const [report, setReport] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReport = async () => {
      if (quizId) {
        try {
          const fetchedReport = await getQuizReport(quizId);
          setReport(fetchedReport);
        } catch (err) {
          console.error('Error fetching quiz report:', err);
          setError('Failed to load the quiz report. Please try again later.');
        }
      }
    };
    fetchReport();
  }, [quizId]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!report) {
    return <div>Generating your personalized report...</div>;
  }

  return (
    <div className="quiz-completed">
      <h2>Quiz Completed</h2>
      <p>Thank you for completing the quiz. Your personalized report has been generated.</p>
      <div className="report-preview">
        <h3>Report Preview</h3>
        <div dangerouslySetInnerHTML={{ __html: report }} />
      </div>
    </div>
  );
};

export default QuizCompleted;