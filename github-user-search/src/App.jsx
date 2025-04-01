// src/App.jsx  
import React, { useState } from 'react';  
import './App.css';  
import UserSearch from './components/UserSearch';  

function App() {  
  return (  
    <div className="App">  
      <h1>GitHub User Search</h1>  
      <UserSearch />  
    </div>  
  );  
}  

export default App;  
// src/App.jsx  
import React from 'react';  
import './App.css';  
import Search from './components/Search'; // Import the Search component  

function App() {  
  return (  
    <div className="App">  
      <h1>GitHub User Search</h1>  
      <Search /> {/* Include the Search component */}  
    </div>  
  );  
}  

export default App;  
