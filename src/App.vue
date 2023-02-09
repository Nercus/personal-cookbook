<template>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

router.beforeEach((to, from, next) => {
  if (to.name === undefined) {
    next({ path: '/' });
    return
  }
  next();
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Merriweather&display=swap');

#app {
  font-family: 'Merriweather', serif;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
