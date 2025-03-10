// UserDetails.jsx  
import React, { useContext } from 'react';  
import UserContext from './UserContext'; // استيراد UserContext  

function UserDetails() {  
    const userData = useContext(UserContext); // استهلاك السياق للحصول على بيانات المستخدم  

    return (  
        <div>  
            <p>Name: {userData.name}</p> {/* عرض اسم المستخدم */}  
            <p>Email: {userData.email}</p> {/* عرض البريد الإلكتروني */}  
        </div>  
    );  
}  

export default UserDetails;  
