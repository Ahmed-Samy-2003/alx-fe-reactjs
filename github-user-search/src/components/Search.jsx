// Example call within Search.jsx where handleSubmit function is defined  
try {  
  const userData = await fetchUserData(username, location, minRepos); // Make sure to pass all parameters  
  setUsers(userData.items); // Adjust based on actual response structure  
} catch (err) {  
  setError("Couldn't find any users.");  
}  // Example call within Search.jsx where handleSubmit function is defined  
try {  
  const userData = await fetchUserData(username, location, minRepos); // Make sure to pass all parameters  
  setUsers(userData.items); // Adjust based on actual response structure  
} catch (err) {  
  setError("Couldn't find any users.");  
}  
// src/components/Search.jsx  
import React, { useState } from 'react';  
import { fetchUserData } from '../services/githubService'; // Import the API service  

function Search() {  
  const [username, setUsername] = useState(''); // State to store the username  
  const [location, setLocation] = useState(''); // State to store the location  
  const [minRepos, setMinRepos] = useState(''); // State to store the minimum repo count  
  const [users, setUsers] = useState([]); // State to store the user data  
  const [loading, setLoading] = useState(false); // Loading state  
  const [error, setError] = useState(''); // Error state  

  // Async function to handle form submission  
  const handleSubmit = async (e) => {  
    e.preventDefault(); // Prevent default form submission  
    setLoading(true); // Set loading state to true  
    setError(''); // Reset error message  

    try {  
      // Fetch user data based on username, location, and minRepos  
      const userData = await fetchUserData(username, location, minRepos);  
      setUsers(userData.items); // Update the users state with fetched data  
    } catch (err) {  
      // Handle error by setting the error state  
      setError("Couldn't find any users.");  
      setUsers([]); // Clear user data if there was an error  
    } finally {  
      setLoading(false); // Reset loading state  
    }  
  };  

  return (  
    <div className="p-4 max-w-lg mx-auto">  
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">  
        <input  
          type="text"  
          value={username}  
          onChange={(e) => setUsername(e.target.value)} // Update username state  
          placeholder="Enter GitHub username"  
          className="border rounded p-2"  
          required  
        />  
        <input  
          type="text"  
          value={location}  
          onChange={(e) => setLocation(e.target.value)} // Update location state  
          placeholder="Location (e.g., San Francisco)"  
          className="border rounded p-2"  
        />  
        <input  
          type="number"  
          value={minRepos}  
          onChange={(e) => setMinRepos(e.target.value)} // Update minRepos state  
          placeholder="Minimum Repositories"  
          className="border rounded p-2"  
        />  
        <button type="submit" className="bg-blue-500 text-white rounded p-2">  
          Search  
        </button>  
      </form>  

      {loading && <p>Loading...</p>} {/* Show loading message if loading */}  
      {error && <p className="text-red-600">{error}</p>} {/* Show error message if exists */}  
      {users.length > 0 && ( // Use && for conditional rendering when users exist  
        <div className="mt-4">  
          {users.map((user) => ( // Use map to render each user  
            <div key={user.id} className="border p-4 mb-4 rounded">  
              <h2 className="text-xl">{user.login}</h2>  
              <p>Location: {user.location || 'N/A'}</p>  
              <p>Repositories: {user.public_repos}</p>  
              <a  
                href={user.html_url}  
                target="_blank"  
                rel="noopener noreferrer"  
                className="text-blue-600"  
              >  
                View Profile  
              </a>  
            </div>  
          ))}  
        </div>  
      )}  
    </div>  
  );  
}  

export default Search; // Export the Search component  
// Function in Search.jsx where handleSubmit is defined  
const handleSubmit = async (e) => {  
  e.preventDefault(); // Prevent default form submission  
  setLoading(true);  
  setError('');  

  try {  
    const userData = await fetchUserData(username, location, minRepos); // Fetch user data using the GitHub service  
    setUsers(userData.items); // Assuming userData.items contains the relevant users  
  } catch (error) {  
    setError("Couldn't find any users.");  
    setUsers([]);  
  } finally {  
    setLoading(false); // Reset loading state  
  }  
};  
