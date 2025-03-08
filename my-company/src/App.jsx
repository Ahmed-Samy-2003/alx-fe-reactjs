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
import Navbar from './components/Navbar'; // تأكد من أن المسار صحيح  
import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Navbar from './components/Navbar'; // استيراد Navbar  
import Home from './Home'; // تأكد من وجود مكون Home  
import About from './About'; // تأكد من وجود مكون About  

function App() {  
  return (  
    <Router>  
      <Navbar />  {/* أضف Navbar هنا */}  
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<About />} />  
      </Routes>  
    </Router>  
  );  
}  

export default App;  
