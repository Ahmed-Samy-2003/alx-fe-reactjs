// UserDetails.jsx  
import React, { useContext } from 'react';  
import UserContext from './UserContext'; // استيراد UserContext  

function UserDetails() {  
  const userData = useContext(UserContext); // الحصول على بيانات المستخدم من السياق  

  return (  
    <div>  
      <p>Name: {userData.name}</p> {/* عرض اسم المستخدم */}  
      <p>Email: {userData.email}</p> {/* عرض بريد المستخدم */}  
    </div>  
  );  
}  

export default UserDetails;  

