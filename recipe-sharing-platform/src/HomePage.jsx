import React, { useEffect, useState } from 'react';  
import recipeData from '../data.json'; // Adjust the path if necessary  

const HomePage = () => {  
  const [recipes, setRecipes] = useState([]);  

  useEffect(() => {  
    // Simulating fetch from a local JSON file  
    setRecipes(recipeData);  
  }, []);  

  return (  
    <div className="container mx-auto px-4 py-8">  
      <h1 className="text-3xl font-bold mb-6">Recipe List</h1>  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">  
        {recipes.map((recipe) => (  
          <div key={recipe.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-105 hover:shadow-xl">  
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />  
            <div className="p-4">  
              <h2 className="text-xl font-semibold">{recipe.title}</h2>  
              <p className="text-gray-600">{recipe.summary}</p>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default HomePage;  
