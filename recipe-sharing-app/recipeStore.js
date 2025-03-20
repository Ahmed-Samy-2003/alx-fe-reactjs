import create from 'zustand';  

const useRecipeStore = create(set => ({  
    recipes: [], // مصفوفة للوصفات (ستتم ملؤها لاحقًا)  
    favorites: [], // مصفوفة للمفضلات  
    // إضافة وصفة إلى المفضلة  
    addFavorite: (recipeId) => set(state => ({  
        favorites: [...state.favorites, recipeId]  
    })),  
    // إزالة وصفة من المفضلة  
    removeFavorite: (recipeId) => set(state => ({  
        favorites: state.favorites.filter(id => id !== recipeId)  
    })),  
    recommendations: [], // مصفوفة للتوصيات  
    // توليد التوصيات  
    generateRecommendations: () => set(state => {  
        // تنفيذ وهمي لاستناد التوصيات على المفضلات  
        const recommended = state.recipes.filter(recipe =>  
            state.favorites.includes(recipe.id) && Math.random() > 0.5  
        );  
        return { recommendations: recommended };  
    }),  
}));  

export default useRecipeStore;  
