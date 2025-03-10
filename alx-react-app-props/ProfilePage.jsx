// ProfilePage.jsx  
import React from 'react';  
import UserDetails from './UserDetails';  

const ProfilePage = () => {  
    return (  
        <div>  
            <h1>صفحة الملف الشخصي</h1>  
            <UserDetails /> {/* لم نعد نمرر userData كخاصية */}  
        </div>  
    );  
};  

export default ProfilePage;  
