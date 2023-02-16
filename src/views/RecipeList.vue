<template>
    <div class="w-full h-screen py-4 px-6 bg-light-1 flex flex-col">
        <div class="flex flex-row h-24">
            <img src="../assets/logonobg.png" class="h-full pb-2" />
            <h2 class="text-[3rem] tracking-wider font-bold pb-6">Recipes</h2>
        </div>

        <div class="w-full h-full flex-row flex gap-4">
            <div class="flex flex-col items-center justify-start w-1/5 px-2 gap-2">
                <div class="flex flex-row items-center justify-center gap-1">
                    <h2 class="font-bold text-lg">Filter</h2>
                    <button v-if="selectedFilters.length > 0" @click="selectedFilters = []">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="m12 13.4l-4.9 4.9q-.275.275-.7.275q-.425 0-.7-.275q-.275-.275-.275-.7q0-.425.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275Z" />
                        </svg>
                    </button>
                </div>

                <FilterButton v-for="filter in possibleFilters" :key="filter" :active="selectedFilters.includes(filter)"
                    @click="selectFilter(filter)">
                    {{ filter }}</FilterButton>
            </div>
            <div class="grid w-full h-full grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 flex-grow overflow-y-scroll content-start"
                v-auto-animate>
                <RecipeCard v-for="r in filteredRecipes" :key="r.id" :recipe="r"
                    @click="router.push({ name: 'recipe', params: { id: r.id } })">
                </RecipeCard>
            </div>
        </div>
</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from '../store/index'
import RecipeCard from '../components/RecipeCard.vue';
import FilterButton from '../components/FilterButton.vue';
import { computed, onMounted, ref } from 'vue';
import { MainTypes, RecipeType } from '../types/types.d';
const store = useStore()
const router = useRouter();

const possibleFilters = ref([] as RecipeType[])
const selectedFilters = ref([] as RecipeType[])


function selectFilter(filter: RecipeType) {
    if (selectedFilters.value?.includes(filter)) {
        selectedFilters.value = selectedFilters.value.filter(f => f != filter)
    } else {
        selectedFilters.value?.push(filter)
    }
}
const filteredRecipes = computed(() => {
    if (selectedFilters.value.length == 0) {
        return store.recipes
    }
    return store.recipes.filter(r => selectedFilters.value.includes(r.type.main))
})

function addDummyRecipes() {
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
    store.addNewRecipe({
        id: nextID + 1,
        name: "Kipferlschmarrn",
        description: "Ein super leckeres Rezept für Kipferlschmarrn",
        ingredients: [],
        steps: [],
        type: {
            main: RecipeType.Dessert,
        },
        duration: 100,
        difficulty: 3,
        servings: 10,
    })
}
onMounted(() => {
    if (store.recipes.length == 0) {
        addDummyRecipes()
    }

    possibleFilters.value = store.allRecipeTypes
    if (possibleFilters.value.length == 1) {
        selectedFilters.value?.push(possibleFilters.value[0])
    }

})

</script>

<style scoped>
</style>
