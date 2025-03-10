// UserDetails.jsx  
import React, { useContext } from 'react';  
import UserContext from './UserContext'; // استيراد UserContext  

function UserDetails() {  
  const userData = useContext(UserContext); // استهلاك البيانات من السياق  

  return (  
    <div>  
      <p>Name: {userData.name}</p> {/* عرض اسم المستخدم */}  
      <p>Email: {userData.email}</p> {/* عرض البريد الإلكتروني */}  
    </div>  
  );  
}  

export default UserDetails;  
