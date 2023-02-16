import { Recipe } from './../types/types.d';
import { defineStore } from "pinia";


export const useStore = defineStore("store", {
    state: () => ({
        loggedIn: false,
        recipes: [] as Recipe[],
    }),
    getters: {
        getAllRecipes() {},
        getNextRecipeId(state) {
            return state.recipes.length + 1;
        },
        allRecipeTypes(state) {
            const recipeTypes = state.recipes.map((recipe) => recipe.type.main);
            return [...new Set(recipeTypes)];
        },
    },
    actions: {
        addNewRecipe(newRecipe: Recipe) {
            this.recipes.push(newRecipe);
        },
        getRecipeById(id: number): Recipe | null {
            if (!this.recipes) return null;
            return this.recipes.find((recipe) => recipe.id === id) || null;
        },
    },
})
