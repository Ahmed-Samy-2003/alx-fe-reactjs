// src/components/Search.jsx  
import React, { useState } from 'react';  
import { fetchUserData } from '../services/githubService'; // Importing the service function  

function Search() {  
  const [username, setUsername] = useState(''); // State to capture input  
  const [user, setUser] = useState(null); // State to capture user data  
  const [loading, setLoading] = useState(false); // State for loading  
  const [error, setError] = useState(''); // State to capture errors  

  const handleSubmit = async (e) => {  
    e.preventDefault(); // Prevent page refresh  
    setLoading(true); // Set loading state  
    setError(''); // Clear previous error  

    try {  
      const userData = await fetchUserData(username); // Fetch user data  
      setUser(userData); // Set user data in state  
    } catch (err) {  
      setError('Looks like we can’t find the user'); // Set error message  
      setUser(null); // Clear user data  
    } finally {  
      setLoading(false); // Reset loading state  
    }  
  };  

  return (  
    <div>  
      <form onSubmit={handleSubmit}>  
        <input  
          type="text"  
          value={username}  
          onChange={(e) => setUsername(e.target.value)} // Update input value  
          placeholder="Enter GitHub username"  
          required  
        />  
        <button type="submit">Search</button>  
      </form>  

      {loading && <p>Loading...</p>} {/* Display loading message */}  
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}  
      {user && (  
        <div>  
          <h2>{user.name}</h2>  
          <img src={user.avatar_url} alt={user.login} width="100" />  
          <p>GitHub Profile: <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a></p>  
        </div>  
      )}  
    </div>  
  );  
}  

export default Search;  
// src/components/Search.jsx  
import React, { useState } from 'react';  
import { fetchUserData } from '../services/githubService'; // Importing the service function  

function Search() {  
  const [username, setUsername] = useState(''); // State to capture input  
  const [user, setUser] = useState(null); // State to capture user data  
  const [loading, setLoading] = useState(false); // State for loading  
  const [error, setError] = useState(''); // State to capture errors  

  const handleSubmit = async (e) => {  
    e.preventDefault(); // Prevent page refresh  
    setLoading(true); // Set loading state  
    setError(''); // Clear previous error  

    try {  
      const userData = await fetchUserData(username); // Fetch user data  
      setUser(userData); // Set user data in state  
    } catch (err) {  
      // Error handling: set the error message  
      setError('Looks like we can’t find the user'); // Set error message when user is not found  
      setUser(null); // Clear user data  
    } finally {  
      setLoading(false); // Reset loading state  
    }  
  };  

  return (  
    <div>  
      <form onSubmit={handleSubmit}>  
        <input  
          type="text"  
          value={username}  
          onChange={(e) => setUsername(e.target.value)} // Update input value  
          placeholder="Enter GitHub username"  
          required  
        />  
        <button type="submit">Search</button>  
      </form>  

      {loading && <p>Loading...</p>} {/* Display loading message */}  
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}  
      {user && (  
        <div>  
          <h2>{user.name}</h2>  
          <img src={user.avatar_url} alt={user.login} width="100" />  
          <p>  
            GitHub Profile: <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a>  
          </p>  
        </div>  
      )}  
    </div>  
  );  
}  

export default Search;  
