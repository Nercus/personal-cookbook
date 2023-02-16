<template>
    <div class="w-full h-full overflow-hidden">
        <div class="flex justify-start items-center w-full h-full z-10 overflow-hidden ">
            <Starport port="recipe-image"
                class="absolute -right-10 -top-20  w-2/5 aspect-square rounded-full border border-light-3 p-1 bg-light-2 ">
                <img class="w-full h-full" :src="recipe?.image ?? '../src/assets/recipePlacerholder.svg'" />
            </Starport>
            <div class="flex justify-end p-3  h-2/3  w-4/5  transition duration-200 ease-in-out ">
                <div class="flex flex-col w-full justify-end">
                    <Starport port="recipe-name">
                        <h1 class="font-bold text-md truncate text-center w-full">{{ recipe?.name }}</h1>
                    </Starport>
                    <Starport port="recipe-description">
                        <p class="text-center w-full">{{ recipe?.description }}</p>
                    </Starport>
                </div>
            </div>
        </div>
</div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useStore } from '../store';
import { computed, ref } from 'vue';
const route = useRoute();
const store = useStore();




const recipe = computed(() => {
    const recipeId = Number(route.params.id)
    return store.getRecipeById(recipeId);
});
</script>

<style scoped>
</style>
