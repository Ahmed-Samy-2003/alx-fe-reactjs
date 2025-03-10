// App.jsx  
import React from 'react';  
import ProfilePage from './ProfilePage';  
import UserContext from './UserContext'; // استيراد UserContext  

function App() {  
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" }; // بيانات المستخدم  

  return (  
    <UserContext.Provider value={userData}> {/* توفير بيانات المستخدم للسياق */}  
      <ProfilePage />  
    </UserContext.Provider>  
  );  
}  

export default App;  
