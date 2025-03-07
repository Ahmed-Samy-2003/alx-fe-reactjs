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
