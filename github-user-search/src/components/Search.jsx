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
