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
// src/components/Search.jsx  
import React, { useState } from 'react';  
import { fetchUserData } from '../services/githubService'; // Import your API service  

function Search() {  
  const [username, setUsername] = useState(''); // State for username  
  const [location, setLocation] = useState(''); // State for location  
  const [minRepos, setMinRepos] = useState(''); // State for minimum repos  
  const [users, setUsers] = useState([]); // State for user data  
  const [loading, setLoading] = useState(false); // Loading state  
  const [error, setError] = useState(''); // Error state  

  // Function to handle form submission  
  const handleSubmit = async (e) => {  
    e.preventDefault(); // Prevent default form submission behavior  
    setLoading(true); // Set loading state  
    setError(''); // Reset any previous errors  

    const query = `${username} location:${location} repos:>=${minRepos}`; // Construct the query  

    try {  
      const userData = await fetchUserData(query); // Fetch user data based on advanced search criteria  
      setUsers(userData.items); // Assume the response structure has an items array  
    } catch (err) {  
      setError("Looks like we can't find any users.");  
      setUsers([]);  
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
          onChange={(e) => setUsername(e.target.value)}  
          placeholder="Enter GitHub username"  
          className="border rounded p-2"  
          required  
        />  
        <input  
          type="text"  
          value={location}  
          onChange={(e) => setLocation(e.target.value)}  
          placeholder="Location (e.g., San Francisco)"  
          className="border rounded p-2"  
        />  
        <input  
          type="number"  
          value={minRepos}  
          onChange={(e) => setMinRepos(e.target.value)}  
          placeholder="Minimum Repositories"  
          className="border rounded p-2"  
        />  
        <button type="submit" className="bg-blue-500 text-white rounded p-2">  
          Search  
        </button>  
      </form>  

      {loading && <p>Loading...</p>}  
      {error && <p className="text-red-600">{error}</p>}  
      {users.length > 0 && (  
        <div className="mt-4">  
          {users.map((user) => (  
            <div key={user.id} className="border p-4 mb-4 rounded">  
              <h2 className="text-xl">{user.login}</h2>  
              <p>Location: {user.location || 'N/A'}</p>  
              <p>Repositories: {user.public_repos}</p>  
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className
const query = `${username} location:${location} repos:>=${minRepos}`;  
