// src/UserContext.js  
import React, { createContext } from 'react';  

// Create UserContext  
const UserContext = createContext();  

// Export the context  
export const UserProvider = UserContext.Provider;  
export default UserContext;  
