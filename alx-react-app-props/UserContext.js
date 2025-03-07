// src/UserContext.js  
import React, { createContext } from 'react';  

// Create UserContext  
const UserContext = createContext();  

// Export the context  
export const UserProvider = UserContext.Provider;  
export const UserConsumer = UserContext.Consumer; // Optional, if you want to use Consumer in some components  

export default UserContext;  
// In App.jsx  
import UserContext, { UserProvider } from './UserContext';  
// src/App.jsx  
function App() {  
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };  

  return (  
    <UserProvider value={userData}>  
      <ProfilePage />  
    </UserProvider>  
  );  
}  
// src/UserDetails.jsx  
import React, { useContext } from 'react';  
import UserContext from './UserContext';  

function UserDetails() {  
  const userData = useContext(UserContext); // Consume the context  

  return (  
    <div>  
      <p>Name: {userData.name}</p>  
      <p>Email: {userData.email}</p>  
    </div>  
  );  
}  

export default UserDetails;  
