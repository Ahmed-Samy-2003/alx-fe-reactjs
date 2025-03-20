import { useRecipeStore } from './recipeStore';  

const FavoritesList = () => {  
    const { recipes, favorites } = useRecipeStore(state => ({  
        recipes: state.recipes,  
        favorites: state.favorites.map(id => state.recipes.find(recipe => recipe.id === id)).filter(Boolean) // التأكد من وجود الوصفة  
    }));  

    return (  
        <div>  
            <h2>مفضلاتي</h2>  
            {favorites.length > 0 ? (  
                favorites.map(recipe => (  
                    <div key={recipe.id}>  
                        <h3>{recipe.title}</h3>  
                        <p>{recipe.description}</p>  
                    </div>  
                ))  
            ) : (  
                <p>لا توجد مفضلات مضافة.</p>  
            )}  
        </div>  
    );  
};  

export default FavoritesList;  
