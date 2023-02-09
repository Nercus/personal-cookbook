<template>
    <button
        class="flex flex-row transition duration-200 ease-in-out border border-opacity-50 rounded-lg hover:shadow-lg bg-light-1 hover:border-opacity-100 border-light-content">

        <img class="h-full aspect-square" :src="props.image ?? recipePlaceholder" />
        <div class="flex flex-col p-1 py-3">
            <h1 class="font-bold">{{ props.title }}</h1>
            <p>{{ props.description }}</p>
        </div>
    </button>
</template>

<script setup lang="ts">
import recipePlaceholder from '../assets/recipePlacerholder.svg';
const props = defineProps<{
    id: string;
    title: string;
    description?: string;
    image?: string;
}>();
</script>

<style scoped>

</style>
