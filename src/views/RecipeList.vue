<template>
    <div class="w-full h-screen p-4 px-10  bg-light-1 flex flex-col">
        <h2 class="text-[3rem] tracking-wider font-bold ">Recipes</h2>
        <div
            class="grid w-full h-full grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 flex-grow overflow-y-scroll">
            <RecipeCard v-for="r in store.recipes" :key="r.id" :recipe="r"
                @click="router.push({ name: 'recipe', params: { id: r.id } })">
            </RecipeCard>
        </div>
</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from '../store/index'
import RecipeCard from '../components/RecipeCard.vue';
import { onMounted } from 'vue';
import { MainTypes, RecipeType } from '../types/types.d';
const store = useStore()
const router = useRouter();



onMounted(() => {
    const nextID = store.getNextRecipeId
    store.addNewRecipe({
        id: nextID,
        name: "Wildfleischgröstl",
        description: "Ein einfaches Rezept für Wildfleischgröstl",
        ingredients: [],
        steps: [],
        type: {
            main: RecipeType.Main,
            sub: MainTypes.Venison
        },
        duration: 200,
        difficulty: 1,
        servings: 2,
    })
})

</script>

<style scoped>
</style>
