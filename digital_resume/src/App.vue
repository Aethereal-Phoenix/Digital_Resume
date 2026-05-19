<template>
  <NavBar />
  <div class="logo">
    <h1>Alex Sprague</h1>
  </div>
  <div class="display-area">
  <router-view />
  </div>
</template>

<script setup>
import NavBar from '../components/universal/NavBar.vue'
</script>

<style scoped>
.display-area {
  padding: 0 var(--space-sm);
}
</style>