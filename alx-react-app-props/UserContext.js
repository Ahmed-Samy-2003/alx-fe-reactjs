// src/UserContext.js  

import React, { createContext } from 'react';  

// إنشاء Context جديد  
const UserContext = createContext();  

// تصدير UserContext و UserProvider  
const UserProvider = ({ children, value }) => {  
  return (  
    <UserContext.Provider value={value}>  
      {children}  
    </UserContext.Provider>  
  );  
};  

export { UserContext, UserProvider };  
