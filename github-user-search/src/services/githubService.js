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
