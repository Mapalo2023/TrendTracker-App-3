import React from 'react'
import { Radar } from 'react-chartjs-2'
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

interface Trend {
  name: string
  score: number
  category: string
}

const TrendRadar: React.FC = () => {
  const trends: Trend[] = [
    { name: 'AI in Education', score: 0.8, category: 'Technology' },
    { name: 'Remote Work', score: 0.9, category: 'Workplace' },
    { name: 'Sustainable Energy', score: 0.7, category: 'Environment' },
    { name: 'Mental Health Awareness', score: 0.6, category: 'Health' },
    { name: 'Cryptocurrency', score: 0.5, category: 'Finance' },
  ]

  const data = {
    labels: trends.map(trend => trend.name),
    datasets: [
      {
        label: 'Trend Score',
        data: trends.map(trend => trend.score),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  }

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false
        },
        suggestedMin: 0,
        suggestedMax: 1
      }
    }
  }

  return (
    <div className="trend-radar">
      <h2>Global Trends Radar</h2>
      <Radar data={data} options={options} />
      <div className="trend-list">
        {trends.map((trend, index) => (
          <div key={index} className="trend-item">
            <span className="trend-name">{trend.name}</span>
            <div className="trend-bar" style={{ width: `${trend.score * 100}%` }}></div>
            <span className="trend-category">{trend.category}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrendRadar