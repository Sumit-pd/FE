import React from 'react';
import { Link } from 'react-router-dom';
// import { Button } from '@mui/material';

const Enroll = () => {
  return (
    <div className='center'>
      <div className='enroll'>
        <h2>Enter into Student Info System</h2>
        <div className='enroll-button-container'>
          <Link to="/chat">
            <button className='enroll-button'>Enroll Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Enroll;