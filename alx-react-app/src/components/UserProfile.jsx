import React from 'react';  

const UserProfile = (props) => {  
    return (  
        <div>  
            <h2>{props.name}</h2>  
            <p>Age: {props.age}</p>  
            <p>Bio: {props.bio}</p>  
        </div>  
    );  
};  

export default UserProfile;  
import './UserProfile.css';  
function App() {  
    return (  
        <div>  
            <UserProfile  
                name="Alice"  
                age="25"  
                bio="Loves hiking and photography"  
            />  
            {/* You can add more components or content here if needed */}  
        </div>  
    );  
}  
