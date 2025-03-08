// src/UserContext.js  

import React, { createContext } from 'react';  

// إنشاء UserContext باستخدام createContext  
const UserContext = createContext();  

// تصدير UserContext  
export default UserContext; 
// src/UserContext.js  

import React, { createContext, useState } from 'react';  

// إنشاء UserContext باستخدام createContext  
const UserContext = createContext();  

// مزود Context  
const UserProvider = ({ children }) => {  
  const [userData, setUserData] = useState({  
    name: "Jane Doe",  
    email: "jane.doe@example.com"  
  });  

  return (  
    <UserContext.Provider value={{ userData, setUserData }}>  
      {children}  
    </UserContext.Provider>  
  );  
};  

// تصدير UserContext ومزود UserProvider  
export { UserContext, UserProvider };  
// مثال على الاستخدام في App.jsx  
import React from 'react';  
import ProfilePage from './ProfilePage';  
import { UserProvider } from './UserContext';  

function App() {  
  return (  
    <UserProvider>  
      <ProfilePage />  
    </UserProvider>  
  );  
}  

export default App;  
import React, { useContext } from 'react';  
import UserContext from './UserContext';  

const UserDetails = () => {  
  const { userData } = useContext(UserContext);  

  return (  
    <div>  
      <p>Name: {userData.name}</p>  
      <p>Email: {userData.email}</p>  
    </div>  
  );  
};  

export default UserDetails;  
