import React, { useState } from 'react';
import './Logout.css';

const Logout = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = () => {
    setIsLoggingOut(true);
    // Simulate logout process
    setTimeout(() => {
      alert('You have been successfully logged out!');
      setIsLoggingOut(false);
    }, 1500);
  };

  const handleCancel = () => {
    // Redirect to previous page or dashboard
    window.history.back();
  };

  return (
    <div className="logout-container">
      
      <div className="logout-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z" clipRule="evenodd" />
        </svg>
      </div>
      
      <h2 className="logout-title">Are you sure you want to log out?</h2>
      
      <div className="button-group">
        <button 
          className="cancel-btn" 
          onClick={handleCancel}
          disabled={isLoggingOut}
        >
          Cancel
        </button>
        <button 
          className="logout-btn" 
          onClick={handleLogout}
          disabled={isLoggingOut}
        >
          {isLoggingOut ? 'Logging out...' : 'Logout'}
        </button>
      </div>
    </div>
  );
};

export default Logout;