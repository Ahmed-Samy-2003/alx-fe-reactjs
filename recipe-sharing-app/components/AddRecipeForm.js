import React, { useState } from 'react';  

const AddRecipeForm = ({ addRecipe }) => {  
    const [recipeName, setRecipeName] = useState('');  

    const handleSubmit = (e) => {  
        e.preventDefault();  
        addRecipe({ name: recipeName });  
        setRecipeName('');  
    };  

    return (  
        <form onSubmit={handleSubmit}>  
            <input  
                type="text"  
                value={recipeName}  
                onChange={(e) => setRecipeName(e.target.value)}  
                placeholder="Recipe Name"  
                required  
            />  
            <button type="submit">Add Recipe</button>  
        </form>  
    );  
};  

export default AddRecipeForm;  
