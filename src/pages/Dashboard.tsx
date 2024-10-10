import React from 'react'
import { Link } from 'react-router-dom'
import TrendRadar from '../components/TrendRadar'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const Dashboard: React.FC = () => {
  const activityData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Quizzes Taken',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Surveys Completed',
        data: [2, 3, 20, 5, 1, 4],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  return (
    <div className="dashboard">
      <h2>User Dashboard</h2>
      <div className="dashboard-grid">
        <div className="dashboard-item trend-radar">
          <h3>Global Trends Radar</h3>
          <TrendRadar />
        </div>
        <div className="dashboard-item activity-overview">
          <h3>Activity Overview</h3>
          <Line data={activityData} />
        </div>
        <div className="dashboard-item quick-actions">
          <h3>Quick Actions</h3>
          <div className="dashboard-actions">
            <Link to="/create-quiz" className="btn btn-primary">Create Quiz</Link>
            <Link to="/create-survey" className="btn btn-secondary">Create Survey</Link>
          </div>
        </div>
        <div className="dashboard-item recent-activity">
          <h3>Recent Activity</h3>
          <ul>
            <li>Quiz "JavaScript Basics" completed by 15 users</li>
            <li>Survey "Customer Satisfaction" received 50 responses</li>
            <li>New quiz "Python for Beginners" created</li>
          </ul>
        </div>
        <div className="dashboard-item available-quizzes">
          <h3>Available Quizzes</h3>
          <ul>
            <li><Link to="/take-quiz/1">JavaScript Basics</Link></li>
            <li><Link to="/take-quiz/2">Python for Beginners</Link></li>
          </ul>
        </div>
        <div className="dashboard-item trend-insights">
          <h3>Trend Insights</h3>
          <p>Based on recent trends, consider creating content related to:</p>
          <ul>
            <li>Artificial Intelligence in Education</li>
            <li>Remote Work Best Practices</li>
            <li>Sustainable Energy Solutions</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard