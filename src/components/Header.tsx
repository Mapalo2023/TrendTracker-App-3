import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isAdmin');
    navigate('/');
  };

  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <Link to="/">Trendtracker</Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            {isLoggedIn && (
              <>
                <li><Link to="/create-quiz">Create Quiz</Link></li>
                <li><Link to="/create-survey">Create Survey</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
              </>
            )}
          </ul>
        </nav>
        <div className="auth-buttons">
          {isLoggedIn ? (
            <>
              {isAdmin && <Link to="/admin-dashboard" className="btn btn-secondary">Admin</Link>}
              <button onClick={handleLogout} className="btn btn-secondary">Log Out</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-secondary">Log In</Link>
              <Link to="/signup" className="btn btn-primary">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header