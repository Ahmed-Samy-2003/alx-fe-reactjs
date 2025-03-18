function App() {  
  return (  
    <div className="container mx-auto p-4">  
      <h1 className="text-blue-500 text-2xl">Welcome to the Recipe Sharing Platform!</h1>  
    </div>  
  );  
}  

export default App;  
import React from 'react';  
import HomePage from './components/HomePage';  

function App() {  
  return (  
    <div className="App">  
      <HomePage />  
    </div>  
  );  
}  

export default App;  
import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import HomePage from './components/HomePage';  
import RecipeDetail from './components/RecipeDetail';  

function App() {  
  return (  
    <Router>  
      <Routes>  
        <Route path="/" element={<HomePage />} />  
        <Route path="/recipe/:id" element={<RecipeDetail />} />  
      </Routes>  
    </Router>  
  );  
}  

export default App;  
