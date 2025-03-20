import React from 'react';  
import { useRecipeStore } from './recipeStore';  

const RecipeList = () => {  
    const { filteredRecipes } = useRecipeStore(state => ({  
        filteredRecipes: state.filteredRecipes  
    }));  

    return (  
        <div>  
            <h2>قائمة الوصفات</h2>  
            {filteredRecipes.length > 0 ? (  
                filteredRecipes.map(recipe => (  
                    <div key={recipe.id}>  
                        <h3>{recipe.title}</h3>  
                        <p>{recipe.description}</p>  
                    </div>  
                ))  
            ) : (  
                <p>لا توجد وصفات متاحة.</p>  
            )}  
        </div>  
    );  
};  

export default RecipeList;  
