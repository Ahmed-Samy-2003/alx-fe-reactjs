import React from 'react';  
import SearchBar from './SearchBar';  
import RecipeList from './RecipeList';  
import useRecipeStore from './recipeStore';  

const App = () => {  
    const { recipes } = useRecipeStore(state => state);  

    return (  
        <div>  
            <h1>تطبيق مشاركة الوصفات</h1>  
            <SearchBar />  
            <RecipeList />  
        </div>  
    );  
};  

export default App;  
