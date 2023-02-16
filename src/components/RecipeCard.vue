<template>
    <button
        class="relative flex flex-row p-2 group items-center h-fit justify-end bg-light-2 hover:bg-light-3 rounded-lg transition duration-200 ease-in-out">
        <img class="aspect-square w-24 h-24 rounded-full border border-light-3 p-1 bg-light-2 transition duration-400 ease-in-out"
            :src="recipe.image ?? '../src/assets/recipePlacerholder.svg'" />
        <div class="flex justify-end p-3  h-2/3  w-4/5   ">
            <div class="flex flex-col w-full justify-center">
                <h1 class="font-bold text-md truncate text-center w-full text-xl">{{
                    recipe.name }}</h1>
                <p class="text-center w-full text-sm">{{ recipe.description }}</p>
            </div>
        </div>
</button>
</template>

<script setup lang="ts">
import { Recipe } from '../types/types.d';



const props = defineProps<{
    recipe: Recipe;
}>();

const recipe = props.recipe;
</script>

<style scoped>
</style>
