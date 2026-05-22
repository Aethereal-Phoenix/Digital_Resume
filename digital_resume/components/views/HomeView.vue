<!-- The compnent that displays a small amount of text about me -->
<template>
        <main-section />
        <about-preview />
        <projects-preview />
        <skills-grid />
</template>

<script setup>
import MainSection from '../partialViews/MainSection.vue'
import AboutPreview from '../partialViews/AboutPreview.vue';
import ProjectsPreview from '../partialViews/ProjectsPreview.vue'
import SkillsGrid from '../partialViews/SkillsGrid.vue'
</script>