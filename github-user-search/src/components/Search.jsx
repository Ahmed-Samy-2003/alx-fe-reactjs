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
