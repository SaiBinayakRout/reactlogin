import React from 'react';
import '../../UserStyle.css'; 

const UserData = ({ userData, onHomeClick }) => {
  return (
    <div className="user-card">
      <div className="avatar">
        <i className="fa-solid fa-user-tie"></i>
      </div>
      <div className="user-details">
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <button className="details-button">Add Other Details</button>
      </div>
      <div className="go-back">
        <button onClick={onHomeClick}>Go Back to Home</button>
      </div>
    </div>
  );
};

export default UserData;