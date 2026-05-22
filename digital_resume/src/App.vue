<template>
  <NavBar />
  <div class="logo">
    <h1>Alex Sprague</h1>
  </div>
  <div class="display-area">
    <router-view />
  </div>
  
  <Footer />
</template>

<script setup>
import NavBar from '../components/universal/NavBar.vue'
import Footer from '../components/universal/FooterBar.vue'
</script>
