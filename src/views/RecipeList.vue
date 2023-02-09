<template>
    <div>
        list
        <button @click="router.push({ name: 'recipe', params: { id: 123 } })">test</button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style scoped>

</style>
