import React from 'react';  
import ReactDOM from 'react-dom';  
import App from './App'; // تأكد من أن المسار صحيح  
import './index.css'; // إذا كان لديك ملف CSS  

ReactDOM.render(  
  <React.StrictMode>  
    <App />  
  </React.StrictMode>,  
  document.getElementById('root')  
);  
