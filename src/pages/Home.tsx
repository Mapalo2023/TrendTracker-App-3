import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="landing-page">
      <section className="hero">
        <h1>Trendtracker: AI-Powered Trend Analysis</h1>
        <p>Unlock insights, track trends, and make data-driven decisions with ease</p>
        <div className="cta-form">
          <input type="email" placeholder="Enter your email address" />
          <button className="btn btn-primary">Get Started</button>
        </div>
        <p className="subtitle">14-day free trial. No credit card required.</p>
      </section>
      <section className="features">
        <div className="feature-item">
          <i className="fas fa-chart-line"></i>
          <h3>Trend Board</h3>
          <p>Visualize and manage trends with custom boards</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-brain"></i>
          <h3>AI-Powered Insights</h3>
          <p>Get intelligent trend analysis and predictions</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-globe"></i>
          <h3>Global Trend Radar</h3>
          <p>Stay ahead with real-time global trend tracking</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-chart-pie"></i>
          <h3>Custom Reports</h3>
          <p>Generate in-depth reports tailored to your needs</p>
        </div>
      </section>
      <section className="cta">
        <h2>Ready to transform your trend analysis?</h2>
        <p>Join thousands of professionals using Trendtracker to stay ahead of the curve.</p>
        <Link to="/signup" className="btn btn-primary">Start Free Trial</Link>
      </section>
    </div>
  )
}

export default Home