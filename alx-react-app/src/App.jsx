import React from 'react';  
import WelcomeMessage from './components/WelcomeMessage';  

function App() {  
    return (  
        <div>  
            <WelcomeMessage />  
            {/* Other components can be added here */}  
        </div>  
    );  
}  

export default App;  
import UserProfile from './components/UserProfile';  
import React from 'react';  
import UserProfile from './components/UserProfile'; // Ensure this path is correct  
import React from 'react';  
import UserProfile from './components/UserProfile'; // Correct import path  

function App() {  
    return (  
        <div>  
            <UserProfile  
                name="Alice"  
                age="25"  
                bio="Loves hiking and photography"  
            />  
        </div>  
    );  
}  

export default App;  
import React from 'react';  
import Header from './components/Header'; // Adjust the file path if necessary  
import MainContent from './components/MainContent'; // Adjust the file path if necessary  
import Footer from './components/Footer'; // Adjust the file path if necessary  
