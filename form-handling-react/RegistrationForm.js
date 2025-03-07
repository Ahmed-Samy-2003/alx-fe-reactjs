// src/RegistrationForm.js  
import React, { useState } from 'react';  

const RegistrationForm = () => {  
  const [formData, setFormData] = useState({  
    username: '',  
    email: '',  
    password: '',  
  });  

  const handleChange = (event) => {  
    const { name, value } = event.target;  
    setFormData({  
      ...formData,  
      [name]: value,  
    });  
  };  

  const handleSubmit = async (event) => {  
    event.preventDefault();  
    console.log('Form submitted:', formData);  
    
    // Here you might call your mock API for registration  
    // For example, using fetch:  
    // await fetch('https://api.example.com/register', {  
    //   method: 'POST',  
    //   headers: {  
    //     'Content-Type': 'application/json',  
    //   },  
    //   body: JSON.stringify(formData),  
    // });  
  };  

  return (  
    <form onSubmit={handleSubmit}>  
      <div>  
        <label htmlFor="username">Username:</label>  
        <input  
          type="text"  
          id="username"  
          name="username"  
          value={formData.username}  
          onChange={handleChange}  
        />  
      </div>  
      <div>  
        <label htmlFor="email">Email:</label>  
        <input  
          type="email"  
          id="email"  
          name="email"  
          value={formData.email}  
          onChange={handleChange}  
        />  
      </div>  
      <div>  
        <label htmlFor="password">Password:</label>  
        <input  
          type="password"  
          id="password"  
          name="password"  
          value={formData.password}  
          onChange={handleChange}  
        />  
      </div>  
      <button type="submit">Register</button>  
    </form>  
  );  
};  

export default RegistrationForm;  
