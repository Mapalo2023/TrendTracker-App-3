import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Question } from '../types';
import { getQuiz, submitQuizResponses } from '../services/quizService';

const TakeQuiz: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<{ title: string; description: string; questions: Question[]; timeLimit: number } | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      if (quizId) {
        try {
          const fetchedQuiz = await getQuiz(quizId);
          if (fetchedQuiz) {
            setQuiz(fetchedQuiz);
            setTimeLeft(fetchedQuiz.timeLimit * 60); // Convert minutes to seconds
          } else {
            setError('Quiz not found');
          }
        } catch (err) {
          console.error('Error fetching quiz:', err);
          setError('Failed to load quiz. Please try again later.');
        }
      }
    };
    fetchQuiz();
  }, [quizId]);

  useEffect(() => {
    if (timeLeft === null) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === null || prevTime <= 0) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (questionId: string, answer: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (quiz && currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (quiz && quizId) {
      await submitQuizResponses(quizId, answers);
      navigate(`/quiz-completed/${quizId}`);
    }
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!quiz) {
    return <div>Loading quiz...</div>;
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="take-quiz">
      {/* ... rest of the component remains the same ... */}
    </div>
  );
};

export default TakeQuiz;