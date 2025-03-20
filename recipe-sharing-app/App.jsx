import React, { useEffect } from 'react';  
import FavoritesList from './FavoritesList';  
import RecommendationsList from './RecommendationsList';  
import useRecipeStore from './recipeStore';  

const App = () => {  
    const { generateRecommendations } = useRecipeStore(state => ({  
        generateRecommendations: state.generateRecommendations  
    }));  

    useEffect(() => {  
        generateRecommendations(); // توليد التوصيات عند تحميل التطبيق  
    }, [generateRecommendations]);  

    return (  
        <div>  
            <h1>تطبيق مشاركة الوصفات</h1>  
            <FavoritesList />  
            <RecommendationsList />  
        </div>  
    );  
};  

export default App;  
