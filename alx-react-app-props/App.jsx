// App.jsx  
import React from 'react';  
import UserContext from './UserContext';  
import ProfilePage from './ProfilePage';  

const App = () => {  
    const userData = {  
        name: 'John Doe',  // بيانات مستخدم افتراضية  
        email: 'john.doe@example.com',  
    };  

    return (  
        <UserContext.Provider value={userData}> {/* تقديم userData للسياق */}  
            <ProfilePage />  
        </UserContext.Provider>  
    );  
};  

export default App;  
