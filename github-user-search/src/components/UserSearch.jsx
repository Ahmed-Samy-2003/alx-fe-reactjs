// src/components/UserSearch.jsx  
import React, { useState } from 'react';  
import axios from 'axios';  

function UserSearch() {  
  const [username, setUsername] = useState('');  
  const [user, setUser] = useState(null);  
  const [error, setError] = useState('');  

  const handleSearch = async () => {  
    try {  
      const response = await axios.get(`https://api.github.com/users/${username}`);  
      setUser(response.data);  
      setError('');  
    } catch (err) {  
      setError('User not found');  
      setUser(null);  
    }  
  };  

  return (  
    <div>  
      <input  
        type="text"  
        value={username}  
        onChange={(e) => setUsername(e.target.value)}  
        placeholder="Enter GitHub username"  
      />  
      <button onClick={handleSearch}>Search</button>  
      {error && <p>{error}</p>}  
      {user && (  
        <div>  
          <h2>{user.name}</h2>  
          <img src={user.avatar_url} alt={user.login} width="100" />  
          <p>{user.bio}</p>  
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>  
        </div>  
      )}  
    </div>  
  );  
}  

export default UserSearch;  
