<template>
    <div>
        {{ recipeId }}
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
const route = useRoute();
const { id } = route.params;

const recipeId = ref(id);
</script>

<style scoped>

</style>
