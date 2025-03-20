import create from 'zustand';  

const useRecipeStore = create(set => ({  
    recipes: [], // مصفوفة الوصفات  
    searchTerm: '', // مصطلح البحث  
    filteredRecipes: [], // مصفوفة الوصفات المصفاة  
    
    // لتعيين مصطلح البحث  
    setSearchTerm: (term) => {  
        set({ searchTerm: term });  
        set(state => ({  
            filteredRecipes: state.recipes.filter(recipe =>  
                recipe.title.toLowerCase().includes(term.toLowerCase())  
            )  
        }));  
    },  

    // لتصفية الوصفات (اختياري)  
    filterRecipes: () => set(state => ({  
        filteredRecipes: state.recipes.filter(recipe =>  
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())  
        )  
    })),  
}));  

export default useRecipeStore;  
