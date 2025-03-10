// UserDetails.jsx  
import React, { useContext } from 'react';  
import UserContext from './UserContext';  

const UserDetails = () => {  
    const user = useContext(UserContext); // استهلاك UserContext  

    return (  
        <div>  
            <h2>تفاصيل المستخدم</h2>  
            {user ? (  
                <div>  
                    <p>الاسم: {user.name}</p>  
                    <p>البريد الإلكتروني: {user.email}</p>  
                </div>  
            ) : (  
                <p>لا توجد بيانات مستخدم متاحة.</p>  
            )}  
        </div>  
    );  
};  

export default UserDetails;  
