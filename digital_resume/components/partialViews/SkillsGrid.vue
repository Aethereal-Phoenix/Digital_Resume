<!-- Component to display the languages and frameworks I know -->
<template>
  <div class="skills-wrapper fade-up">

    <!-- My Languages -->
    <div class="category">
      <h3 class="green">// Languages</h3>
      <!-- Displays all of my known languages using a json object constructed in the script section of this page -->
      <!-- Dynamically collects the name to display but also individual styling to make each unique -->
      <div class="skills">
        <div class="skills">
          <button v-for="skill in languages" :key="skill.name" class="skill" @click="openDocs(skill.url)" :style="{
            '--hover-color': skill.color,
            '--text-color': skill.textColor
          }">
            {{ skill.name }} ↗
          </button>
        </div>
      </div>
    </div>

    <!-- My Languages -->
    <div class="category">
      <h3 class="green">// Frameworks & Tools</h3>

      <!-- Displays all of my known frameworks using a json object constructed in the script section of this page -->
      <!-- Dynamically collects the name to display but also indivudual styling to make each unique -->
      <div class="skills">
        <button v-for="skill in frameworks" :key="skill.name" class="skill" @click="openDocs(skill.url)" :style="{
          '--hover-color': skill.color,
          '--text-color': skill.textColor
        }">
          {{ skill.name }} ↗
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
// Json of all my known languages
// color and textColor are what the object changes to when hovered over
const languages = [
  {
    name: "C#",
    color: "#68217A",
    textColor: "#ffffff",
    url: "https://learn.microsoft.com/en-us/dotnet/csharp/"
  },
  {
    name: "JavaScript",
    color: "#f7df1e",
    textColor: "#000000",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    name: "HTML",
    color: "#e34c26",
    textColor: "#ffffff",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    name: "CSS",
    color: "#264de4",
    textColor: "#ffffff",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  }
]

// Json of the frameworks I'm familiar with
// color and textColor are what the object changes to when hovered over
const frameworks = [
  {
    name: "ASP.NET",
    color: "#512bd4",
    textColor: "#ffffff",
    url: "https://learn.microsoft.com/en-us/aspnet/core/"
  },
  {
    name: "Vue",
    color: "#42b883",
    textColor: "#ffffff",
    url: "https://vuejs.org/"
  },
  {
    name: ".NET MAUI",
    color: "#512bd4",
    textColor: "#ffffff",
    url: "https://learn.microsoft.com/en-us/dotnet/maui/"
  },
  {
    name: "Bootstrap",
    color: "#7952B3",
    textColor: "#ffffff",
    url: "https://getbootstrap.com/"
  }
]

function openDocs(url) {
  window.open(url, '_blank')
}
</script>

<style scoped>
/* SKILLS */

.skills-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.category {
  text-align: left;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: var(--space-sm);
}

.skill {
  padding: var(--space-xs) var(--space-xs);
  color: var(--text-primary);
  font-size: var(--space-base);

  background: rgba(250, 250, 250, 0.03);

  border: 1px solid var(--border-light);
  border-radius: var(--radius-2xs);

  cursor: pointer;
}

.skill:hover {
  background: var(--hover-color);

  color: var(--text-color);

  border-color: var(--hover-color);

  box-shadow: 0 0 0 1px var(--hover-color);
}

.category h3 {
  margin-bottom: var(--space-sm);

  opacity: 0.8;
}
</style>