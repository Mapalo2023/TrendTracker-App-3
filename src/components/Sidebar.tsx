import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="logo">Trendtracker</div>
      <ul>
        <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
        <li><Link to="/dashboard"><i className="fas fa-tachometer-alt"></i> Dashboard</Link></li>
        <li><Link to="/create-quiz"><i className="fas fa-question-circle"></i> Create Quiz</Link></li>
        <li><Link to="/create-survey"><i className="fas fa-poll"></i> Create Survey</Link></li>
        <li><Link to="/pricing"><i className="fas fa-tags"></i> Pricing</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;