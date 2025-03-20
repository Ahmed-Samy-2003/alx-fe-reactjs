// src/App.jsx  
import React from 'react';  
import RecipeList from './components/RecipeList';  
import AddRecipeForm from './components/AddRecipeForm';  

function App() {  
  return (  
    <div>  
      <h1>Recipe Sharing Application</h1>  
      <AddRecipeForm />  
      <RecipeList />  
    </div>  
  );  
}  

export default App;  
import React, { useEffect } from 'react';  
import FavoritesList from './FavoritesList';  
import RecommendationsList from './RecommendationsList';  
import useRecipeStore from './recipeStore';  

const App = () => {  
    const { generateRecommendations } = useRecipeStore(state => ({  
        generateRecommendations: state.generateRecommendations  
    }));  

    useEffect(() => {  
        generateRecommendations(); // Generate recommendations whenever the app loads  
    }, [generateRecommendations]);  

    return (  
        <div>  
            <h1>Recipe Sharing Application</h1>  
            <FavoritesList />  
            <RecommendationsList />  
        </div>  
    );  
};  

export default App;  
