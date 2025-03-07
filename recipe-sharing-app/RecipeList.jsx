import React from 'react';  

const RecipeList = ({ recipes }) => {  
    return (  
        <ul>  
            {recipes.map((recipe, index) => (  
                <li key={index}>{recipe.name}</li>  
            ))}  
        </ul>  
    );  
};  

export default RecipeList;  
