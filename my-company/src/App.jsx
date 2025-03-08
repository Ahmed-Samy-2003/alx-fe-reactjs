import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from './Home'; // تأكد من أن لديك مكون Home  
import About from './About'; // تأكد من أن لديك مكون About  

function App() {  
  return (  
    <Router>  
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<About />} />  
      </Routes>  
    </Router>  
  );  
}  

export default App;  
