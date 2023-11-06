import React, { useState } from 'react';
import BasicForm from "./components/forms/basicForm";
import HomePage from "./components/forms/Homepage";
import UserData from "./components/forms/userData"


const App = () => {
  const [showHomePage,setShowHomePage]=useState(true);
  const [userData, setUserData] = useState(null);
  
  const handleSignInClick=()=>{
    setShowHomePage(false);
  };

  const handleHomeClick=()=>{
    setShowHomePage(true);
  };

  const handleFormSubmit = (data) => {
    setUserData(data);
    setShowHomePage(false);
  };

  return (
    <div className="App">
      {showHomePage ? (
        <HomePage onSignInClick={handleSignInClick} />
      ) : (
        userData ? (
          <UserData userData={userData} onHomeClick={handleHomeClick} />
        ) : (
          <BasicForm onFormSubmit={handleFormSubmit} />
        )
      )}
    
    </div>
  );
};

export default App;