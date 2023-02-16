<template>
    <button
        class="w-full  text-light-content rounded-full opacity-70  hover:opacity-100  transition duration-300 ease-in-out py-2 border border-light-3"
        :class="props.active ? 'bg-primary hover:shadow-primary hover:shadow-md' : ''">
        <slot></slot>
</button>
</template>

<script setup lang="ts">
const props = defineProps<{
    active: boolean
}>()
</script>

<style scoped>
</style>
