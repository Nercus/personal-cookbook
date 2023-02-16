<template>
  <div class="w-full bg-light-3 h-screen flex items-center justify-center overflow-hidden">
    <StarportCarrier>
      <RouterView></RouterView>
    </StarportCarrier>
</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { StarportCarrier } from 'vue-starport'

const router = useRouter();

router.beforeEach((to, from, next) => {
  if (to.name === undefined) {
    next({ path: '/' });
    return
  }
  next();
});
</script>
