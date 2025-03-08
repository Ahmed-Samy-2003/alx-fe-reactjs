// UserContext.js  
import React, { createContext } from 'react';  

const UserContext = createContext();  

export default UserContext;  
// UserDetails.jsx  
import React, { useContext } from 'react';  
import UserContext from './UserContext';  

function UserDetails() {  
  const userData = useContext(UserContext);  

  return (  
    <div>  
      <p>Name: {userData.name}</p>  
      <p>Email: {userData.email}</p>  
    </div>  
  );  
}  

export default UserDetails;  
// UserInfo.jsx  
import React from 'react';  
import UserDetails from './UserDetails';  

function UserInfo() {  
  return <UserDetails />;  
}  

export default UserInfo;  
