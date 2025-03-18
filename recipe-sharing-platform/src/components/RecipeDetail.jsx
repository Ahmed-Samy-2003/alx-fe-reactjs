import React, { useEffect, useState } from 'react';  
import { useParams } from 'react-router-dom';  
import recipeData from '../data.json'; // Adjust the path if necessary  

const RecipeDetail = () => {  
  const { id } = useParams(); // Get the recipe ID from the URL  
  const [recipe, setRecipe] = useState(null);  

  useEffect(() => {  
    // Fetch the recipe detail from local data using the ID  
    const foundRecipe = recipeData.find((recipe) => recipe.id === parseInt(id));  
    setRecipe(foundRecipe);  
  }, [id]);  

  if (!recipe) {  
    return <div>Loading...</div>; // Loading state or fallback  
  }  

  return (  
    <div className="container mx-auto px-4 py-8">  
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>  
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4 rounded-lg" />  
      <div className="bg-white rounded-lg shadow-lg p-6">  
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>  
        <ul className="list-disc pl-5 mb-6">  
          {/* Mock ingredients; replace with real data if available */}  
          <li>Ingredient 1</li>  
          <li>Ingredient 2</li>  
          <li>Ingredient 3</li>  
        </ul>  
        <h2 className="text-xl font-semibold mb-2">Cooking Instructions</h2>  
        <p>{recipe.summary}</p>  
        <p className="mt-4">Follow these steps:</p>  
        <ol className="list-decimal pl-5">  
          {/* Mock instructions; replace with detailed steps */}  
          <li>Step 1</li>  
          <li>Step 2</li>  
          <li>Step 3</li>  
        </ol>  
      </div>  
    </div>  
  );  
};  

export default RecipeDetail;  
