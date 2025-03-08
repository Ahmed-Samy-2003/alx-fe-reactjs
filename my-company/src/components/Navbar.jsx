import React from 'react';  
import { Link } from 'react-router-dom'; // تأكد من أنك قمت بتثبيت react-router-dom  

const Navbar = () => {  
  return (  
    <nav>  
      <ul>  
        <li>  
          <Link to="/">Home</Link>  
        </li>  
        <li>  
          <Link to="/about">About</Link>  
        </li>  
        {/* يمكنك إضافة المزيد من الروابط هنا */}  
      </ul>  
    </nav>  
  );  
};  

export default Navbar;  
import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Navbar from './components/Navbar'; // تأكد من أن المسار صحيح  
import Home from './Home';   
import About from './About';   

function App() {  
  return (  
    <Router>  
      <Navbar />  
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<About />} />  
      </Routes>  
    </Router>  
  );  
}  

export default App;  
