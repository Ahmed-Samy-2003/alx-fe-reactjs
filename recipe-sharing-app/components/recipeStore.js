// مثال عام لملف recipeStore.js  
import { useState } from 'react';  

const useRecipeStore = () => {  
    const [recipes, setRecipes] = useState([]);  

    const addRecipe = (recipe) => {  
        setRecipes([...recipes, recipe]);  
    };  

    return { recipes, addRecipe };  
};  

export default useRecipeStore;  
import create from 'zustand';  

const useRecipeStore = create(set => ({  
    recipes: [], // All available recipes  
    favorites: [], // Array to hold favorite recipe IDs  
    addFavorite: (recipeId) => set(state => ({  
        favorites: [...state.favorites, recipeId] // Add recipe ID to favorites  
    })),  
    removeFavorite: (recipeId) => set(state => ({  
        favorites: state.favorites.filter(id => id !== recipeId) // Remove recipe ID from favorites  
    })),  
    recommendations: [], // Array for recommended recipes  
    generateRecommendations: () => set(state => {  
        // Generate mock recommendations based on favorite recipes  
        const recommended = state.recipes.filter(recipe =>  
            state.favorites.includes(recipe.id) && Math.random() > 0.5 // Mock logic for recommendations  
        );  
        return { recommendations: recommended };  
    }),  
}));  

export default useRecipeStore;  
