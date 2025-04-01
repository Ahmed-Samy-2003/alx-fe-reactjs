// src/components/Search.jsx  
import React, { useState } from 'react';  
import { fetchUserData } from '../services/githubService'; // Import the function to fetch user data  

function Search() {  
  const [username, setUsername] = useState(''); // State to hold the entered username  
  const [user, setUser] = useState(null); // State to hold fetched user data  
  const [loading, setLoading] = useState(false); // State for loading status  
  const [error, setError] = useState(''); // State to hold error messages  

  // Function to handle form submission  
  const handleSubmit = async (e) => {  
    e.preventDefault(); // Prevent default form submission behavior  
    setLoading(true); // Set loading state to true  
    setError(''); // Reset error message before each new search  

    try {  
      const userData = await fetchUserData(username); // Fetch user data based on username  
      setUser(userData); // Store the fetched user data in state  
    } catch (err) {  
      // If an error occurs (e.g., user not found), set the error message  
      setError("Looks like we can't find the user"); // IMPORTANT: This is the message you want to display  
      setUser(null); // Reset user state to null in case of error  
    } finally {  
      setLoading(false); // Set loading state back to false  
    }  
  };  

  return (  
    <div>  
      <form onSubmit={handleSubmit}>  
        <input  
          type="text"  
          value={username}  
          onChange={(e) => setUsername(e.target.value)} // Update username state as user types  
          placeholder="Enter GitHub username"  
          required  
        />  
        <button type="submit">Search</button>  
      </form>  

      {loading && <p>Loading...</p>} {/* Condition to show loading state */}  
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Condition to show error message */}  
      {user && ( // Show user details if data is successfully fetched  
        <div>  
          <h2>{user.name}</h2>  
          <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />  
          <p>  
            GitHub Profile: <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a>  
          </p>  
        </div>  
      )}  
    </div>  
  );  
}  

export default Search; // Export the Search component  
