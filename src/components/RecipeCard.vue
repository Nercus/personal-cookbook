<template>
    <button class="relative flex flex-row py-2 group items-center h-fit  justify-end">
        <div class="absolute h-2/3 w-[90%] right-0 rounded-lg top-1/2 -translate-y-1/2 bg-light-2 group-hover:bg-light-3">
        </div>
        <div class="flex justify-start items-center z-10">
            <Starport port="recipe-image"
                class="absolute left-0 aspect-square w-24 h-24 rounded-full border border-light-3 p-1 bg-light-2 ">
                <img class="w-full h-full" :src="recipe.image ?? '../src/assets/recipePlacerholder.svg'" />
            </Starport>
            <div class="flex justify-end p-3  h-2/3  w-4/5  transition duration-200 ease-in-out ">
                <div class="flex flex-col w-full justify-end">
                    <Starport port="recipe-name">
                        <h1 class="font-bold text-md truncate text-center w-full">{{ recipe.name }}</h1>
                    </Starport>
                    <Starport port="recipe-description">
                        <p class="text-center w-full">{{ recipe.description }}</p>
                    </Starport>
                </div>
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
