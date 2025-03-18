import React, { useState } from 'react';  

const AddRecipeForm = () => {  
  const [title, setTitle] = useState('');  
  const [ingredients, setIngredients] = useState('');  
  const [steps, setSteps] = useState('');  // Changed from preparation to steps  
  const [error, setError] = useState('');  

  const handleSubmit = (e) => {  
    e.preventDefault();  

    // Simple validation  
    if (!title || !ingredients || !steps) {  // Updated validation to check steps  
      setError('All fields are required.');  
      return;  
    }  
    
    const ingredientsArray = ingredients.split(',').map(ingredient => ingredient.trim());  
    
    // Check if at least two ingredients are provided  
    if (ingredientsArray.length < 2) {  
      setError('Please enter at least two ingredients.');  
      return;  
    }  

    // Clear error message if validation passed  
    setError('');  

    const newRecipe = {  
      title,  
      ingredients: ingredientsArray,  
      steps,  // Updated to use steps variable  
    };  

    console.log('New Recipe:', newRecipe);  
    // Here, you would typically send the newRecipe to your server or add it to your state.  
    
    // Reset form fields  
    setTitle('');  
    setIngredients('');  
    setSteps('');  // Reset steps  
  };  

  return (  
    <div className="container mx-auto p-4">  
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>  
      {error && <div className="mb-4 text-red-500">{error}</div>}  
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">  
        <div className="mb-4">  
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Recipe Title</label>  
          <input  
            type="text"  
            id="title"  
            value={title}  
            onChange={(e) => setTitle(e.target.value)}  
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200"  
            required  
          />  
        </div>  
        <div className="mb-4">  
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients (comma separated)</label>  
          <textarea  
            id="ingredients"  
            value={ingredients}  
            onChange={(e) => setIngredients(e.target.value)}  
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200"  
            rows="3"  
            required  
          />  
        </div>  
        <div className="mb-4">  
          <label htmlFor="steps" className="block text-sm font-medium text-gray-700">Preparation Steps</label>  
          <textarea  
            id="steps"  // Ensure the id matches with the state variable  
            value={steps}  // Use the steps variable for input  
            onChange={(e) => setSteps(e.target.value)}  // Update the state using steps  
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200"  
            rows="5"  
            required  
          />  
        </div>  
        <button  
          type="submit"  
          className="mt-4 w-full p-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"  
        >  
          Submit Recipe  
        </button>  
      </form>  
    </div>  
  );  
};  

export default AddRecipeForm;  
