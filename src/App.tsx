import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import CreateQuiz from './pages/CreateQuiz'
import CreateSurvey from './pages/CreateSurvey'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import UserManagement from './pages/UserManagement'
import ViewReports from './pages/ViewReports'
import SystemSettings from './pages/SystemSettings'
import Pricing from './pages/Pricing'
import TakeQuiz from './pages/TakeQuiz'
import QuizCompleted from './pages/QuizCompleted'
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-quiz" element={<CreateQuiz />} />
              <Route path="/create-survey" element={<CreateSurvey />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/admin/users" element={<UserManagement />} />
              <Route path="/admin/reports" element={<ViewReports />} />
              <Route path="/admin/settings" element={<SystemSettings />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/take-quiz/:quizId" element={<TakeQuiz />} />
              <Route path="/quiz-completed/:quizId" element={<QuizCompleted />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App