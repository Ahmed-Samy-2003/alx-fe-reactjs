// src/App.jsx  
import React from 'react';  
import PostsComponent from './PostsComponent';  

const App = () => {  
  return (  
    <div>  
      <header>  
        <h1>React Query Demo</h1>  
      </header>  
      <main>  
        <PostsComponent />  
      </main>  
    </div>  
  );  
};  

export default App;  
