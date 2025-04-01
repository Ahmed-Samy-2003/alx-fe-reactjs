// Assuming you have a state setup for username, location, and minRepos  
const handleSubmit = async (e) => {  
  e.preventDefault();  
  setLoading(true);  
  setError('');  

  try {  
    const userData = await fetchUserData(username, location, minRepos); // Pass all parameters  
    setUsers(userData.items); // Use the items array from the response to set users  
  } catch (err) {  
    setError("Couldn't find any users.");  
    setUsers([]);  
  } finally {  
    setLoading(false);  
  }  
};  
// src/components/Search.jsx  
import React, { useState } from 'react';  
import { fetchUserData } from '../services/githubService'; // Import the API service  

function Search() {  
  const [username, setUsername] = useState(''); // State for the username  
  const [location, setLocation] = useState(''); // State for the location  
  const [minRepos, setMinRepos] = useState(''); // State for minimum repositories  
  const [users, setUsers] = useState([]); // State for user data  
  const [loading, setLoading] = useState(false); // Loading state  
  const [error, setError] = useState(''); // Error state  

  // Function to handle form submission  
  const handleSubmit = async (e) => {  
    e.preventDefault(); // Prevent form submission  
    setLoading(true); // Set loading state  
    setError(''); // Reset any previous errors  

    try {  
      const userData = await fetchUserData(username, location, minRepos); // Fetch the users  
      setUsers(userData.items); // Assuming userData.items contains the relevant user data  
    } catch (err) {  
      setError("Looks like we can't find any users.");  
      setUsers([]); // Clear users on error  
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
          onChange={(e) => setMinRepos(e.target.value)} // Update minimum repos state  
          placeholder="Minimum Repositories"  
          className="border rounded p-2"  
        />  
        <button type="submit" className="bg-blue-500 text-white rounded p-2">  
          Search  
        </button>  
      </form>  

      {loading && <p>Loading...</p>} {/* Show loading message if loading */}  
      {error && <p className="text-red-600">{error}</p>} {/* Show error message if exists */}  
      {users.length > 0 && ( // Use && to conditionally render the users  
        <div className="mt-4">  
          {users.map((user) => ( // Use map to iterate over users  
            <div key={user.id} className="border p-4 mb-4 rounded">  
              <h2 className="text-xl">{user.login}</h2>  
              <p>Location: {user.location || 'N/A'}</p>  
              <p>Repositories: {user.public_repos}</p>  
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">  
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
// Example call within Search.jsx where handleSubmit function is defined  
try {  
  const userData = await fetchUserData(username, location, minRepos); // Make sure to pass all parameters  
  setUsers(userData.items); // Adjust based on actual response structure  
} catch (err) {  
  setError("Couldn't find any users.");  
}  
