<template>
    <div class="w-full h-screen p-4 px-10 pt-20 bg-light-2">
        <TitleBar></TitleBar>
        <div class="grid w-full h-full grid-flow-row grid-cols-2 gap-4 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5">
            <RecipeCard v-for="index in 30" :key="index" :id="index.toString()" :title="`Recipe ${index}`"></RecipeCard>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import RecipeCard from '../components/RecipeCard.vue';
import TitleBar from '../components/TitleBar.vue';
const router = useRouter();


</script>

<style scoped>

</style>
