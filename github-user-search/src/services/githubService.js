// src/services/githubService.js  
import axios from 'axios';  

// Base URL for GitHub API  
const BASE_URL = 'https://api.github.com/users/';  

/**  
 * Fetches user data from GitHub API  
 * @param {string} username - The GitHub username to search for  
 * @returns {Promise<Object>} - Promise representing the user data  
 */  
export const fetchGitHubUser = async (username) => {  
  try {  
    const response = await axios.get(`${BASE_URL}${username}`);  
    return response.data;  // Return the user data  
  } catch (error) {  
    throw new Error('User not found or API limit exceeded'); // Handle errors  
  }  
};  
// src/services/githubService.js  
import axios from 'axios';  

// Function to fetch user data from GitHub API by username  
export const fetchUserData = async (username) => {  
  const response = await axios.get(`https://api.github.com/users/${username}`);  
  return response.data; // Return user data  
};  
// src/services/githubService.js  
import axios from 'axios';  

// Function to fetch user data from GitHub API by username  
export const fetchUserData = async (username) => {  
  const response = await axios.get(`https://api.github.com/users/${username}`);  
  return response.data; // Return the user data  
};  
// src/services/githubService.js  
import axios from 'axios';  

// Function to fetch user data based on advanced search criteria  
export const fetchUserData = async (query) => {  
  const response = await axios.get(`https://api.github.com/search/users`, {  
    params: {  
      q: query, // Incorporating the query string for advanced search  
      per_page: 30 // Specify the number of results per page, adjust as needed  
    }  
  });  
  return response.data; // Return the raw data from the response  
};  
// src/services/githubService.js  
import axios from 'axios';  

// Function to fetch user data based on advanced search criteria  
export const fetchUserData = async (username, location, minRepos) => {  
  // Construct the query string  
  const queryParts = [];  

  // Check if username is provided and add to query  
  if (username) {  
    queryParts.push(username);  
  }  

  // Check if location is provided and add it to the query  
  if (location) {  
    queryParts.push(`location:${location}`);  
  }  

  // Check if minRepos is provided, ensure it's a valid number, and add it to the query  
  if (minRepos && !isNaN(minRepos)) {  
    queryParts.push(`repos:>=${minRepos}`);  
  }  

  const query = queryParts.join(' '); // Combine all parts into one query string  

  try {  
    // Make the API call to GitHub's search/users endpoint with constructed query  
    const response = await axios.get('https://api.github.com/search/users', {  
      params: {  
        q: query, // pass the constructed query  
        per_page: 30, // specify the number of items to fetch per page  
      }  
    });  
    return response.data; // Return the API response data  
  } catch (error) {  
    // Handle and throw an error if there's an issue with the request  
    throw new Error('Unable to fetch user data: ' + error.message);  
  }  
};  
// src/services/githubService.js  
import axios from 'axios';  

// Fetch user data based on advanced search criteria  
export const fetchUserData = async (username, location, minRepos) => {  
  // Construct the query string  
  const queryParts = [];  

  // Include the username in the query if provided  
  if (username) {  
    queryParts.push(username);  
  }  

  // Include location in the query if provided  
  if (location) {  
    queryParts.push(`location:${location}`);  
  }  

  // Include minimum repositories in the query if provided  
  if (minRepos) {  
    queryParts.push(`repos:>=${minRepos}`); // Ensure this is formatted correctly  
  }  

  // Join the query parts with space to form the query string  
  const query = queryParts.join(' ');  

  try {  
    // API call to GitHub's search users endpoint  
    const response = await axios.get('https://api.github.com/search/users', {  
      params: {  
        q: query, // Constructed query  
        per_page: 30, // Specify results per page (optional)  
      }  
    });  
    return response.data; // Return user data from response  
  } catch (error) {  
    throw new Error("Unable to fetch user data: " + error.message); // Handle errors  
  }  
};  
