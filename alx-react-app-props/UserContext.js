// UserContext.js  
import React, { createContext } from 'react';  

// إنشاء Context جديد  
const UserContext = createContext();  

// تصدير الـ Context للاستخدام في مكونات أخرى  
export default UserContext;  
// بعض مكون React  
import React, { useContext } from 'react';  
import UserContext from './UserContext';  

const UserProfile = () => {  
    // استخدام الـ Context للحصول على بيانات المستخدم  
    const userContext = useContext(UserContext);  
    const { user } = userContext; // على افتراض أن لدينا مستخدمًا  

    return (  
        <div>  
            <h1>User Profile</h1>  
            {user ? (  
                <p>Welcome, {user.name}!</p>  
            ) : (  
                <p>Please log in.</p>  
            )}  
        </div>  
    );  
};  

export default UserProfile;  
