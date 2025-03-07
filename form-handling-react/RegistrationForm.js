// src/components/RegistrationForm.js  
import React, { useState } from 'react';  

const RegistrationForm = () => {  
    const [username, setUsername] = useState('');  
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');  
    const [error, setError] = useState('');  

    const handleSubmit = (e) => {  
        e.preventDefault();  
        if (!username || !email || !password) {  
            setError('All fields are required');  
            return;  
        }  
        setError('');  
        // Simulate API call  
        console.log('User Registered:', { username, email, password });  
        // Reset fields after submission  
        setUsername('');  
        setEmail('');  
        setPassword('');  
    };  

    return (  
        <form onSubmit={handleSubmit}>  
            <div>  
                <label htmlFor="username">Username:</label>  
                <input  
                    type="text"  
                    id="username"  
                    value={username}  
                    onChange={(e) => setUsername(e.target.value)}  
                />  
            </div>  
            <div>  
                <label htmlFor="email">Email:</label>  
                <input  
                    type="email"  
                    id="email"  
                    value={email}  
                    onChange={(e) => setEmail(e.target.value)}  
                />  
            </div>  
            <div>  
                <label htmlFor="password">Password:</label>  
                <input  
                    type="password"  
                    id="password"  
                    value={password}  
                    onChange={(e) => setPassword(e.target.value)}  
                />  
            </div>  
            {error && <div style={{ color: 'red' }}>{error}</div>}  
            <button type="submit">Register</button>  
        </form>  
    );  
};  

export default RegistrationForm;  
