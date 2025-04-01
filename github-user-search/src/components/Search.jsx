// src/components/Search.jsx  
import React, { useState } from 'react';  
import { fetchUserData } from '../services/githubService'; // Ensure this import matches your structure  

function Search() {  
  const [username, setUsername] = useState(''); // State to hold the username input  
  const [user, setUser] = useState(null); // State to store user data  
  const [loading, setLoading] = useState(false); // State to indicate loading  
  const [error, setError] = useState(''); // State to store error messages  

  const handleSubmit = async (e) => {  
    e.preventDefault(); // Prevent default form submission behavior  
    setLoading(true); // Indicate loading has started  
    setError(''); // Reset any previous error message  

    try {  
      const userData = await fetchUserData(username); // Fetch user data from API  
      setUser(userData); // Store the user data in the state  
    } catch (err) {  
      // If there's an error, set the error state accordingly  
      setError("Looks like we can't find the user"); // Set the error message  
      setUser(null); // Clear previous user data  
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
          onChange={(e) => setUsername(e.target.value)} // Update username as the user types  
          placeholder="Enter GitHub username"  
          required  
        />  
        <button type="submit">Search</button>  
      </form>  

      {loading && <p>Loading...</p>} {/* Show loading indicator while fetching data */}  
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if applicable */}  
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
