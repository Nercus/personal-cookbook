<template>
  <div class="w-full bg-light-3 h-screen flex items-center justify-center overflow-hidden">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
</div>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
