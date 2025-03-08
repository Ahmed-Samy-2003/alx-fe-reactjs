// App.jsx  
import React from 'react';  
import ProfilePage from './ProfilePage'; // استيراد مكون ProfilePage  
import UserContext from './UserContext'; // استيراد UserContext  

function App() {  
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" }; // بيانات المستخدم  

  return (  
    // إحاطة مكون ProfilePage بمكون UserContext.Provider وتمرير userData كقيمة  
    <UserContext.Provider value={userData}>  
      <ProfilePage />  
    </UserContext.Provider>  
  );  
}  

export default App;  
