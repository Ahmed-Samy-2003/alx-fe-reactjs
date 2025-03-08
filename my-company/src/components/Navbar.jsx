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
import React from 'react';  
import { Link } from 'react-router-dom';  

const Navbar = () => {  
  return (  
    <nav style={{  
      backgroundColor: '#333', // لون الخلفية  
      display: 'flex',         // استخدام flexbox  
      justifyContent: 'space-between', // توزيع العناصر  
      padding: '10px'         // حشوة إضافية  
    }}>  
      <div style={{ color: 'white', fontSize: '20px' }}>  
        My Website  
      </div>  
      <ul style={{  
        listStyleType: 'none',  // إزالة نقاط القائمة  
        display: 'flex',         // استخدام flexbox للعنصر ul  
        margin: 0,              // إزالة الهامش  
        padding: 0               // إزالة الحشوة  
      }}>  
        <li style={{ margin: '0 15px' }}>  
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>  
        </li>  
        <li style={{ margin: '0 15px' }}>  
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>  
        </li>  
        <li style={{ margin: '0 15px' }}>  
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>  
        </li>  
      </ul>  
    </nav>  
  );  
};  

export default Navbar;  
