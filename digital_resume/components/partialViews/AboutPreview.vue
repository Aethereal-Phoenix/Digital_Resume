<!-- The compnent that displays a small amount of text about me -->
<template>
  <div class="about-text fade-up">
    <h1 class="section-header green"> // About</h1>
    <p>
      <span class="teal">Console</span>.<wbr><span class="yellow">WriteLine</span>(<span class=orange>"I build practical
        software with a focus on backend systems, where logic, data flow, and structure come together.
        I enjoy designing applications that are modular, maintainable, and able to grow beyond their initial
        scope."</span>);
    </p>

    <p>
      <span class="teal">Console</span>.<wbr><span class="yellow">WriteLine</span>(<span class=orange>"I prioritize
        real-world projects over tutorials, with a focus on clean code, readability, and seeing things through to
        completion."</span>);
    </p>

    <!-- Button to take the user to my ABOUT page -->
    <div class="btn-row">
      <router-link to="/about" class="btn btn-primary">
        Open About.cs
      </router-link>
    </div>
  </div>
</template>

<!-- Styling that only applies to this component -->
<style scoped>
.about-text {
  text-align: left;
}
</style>