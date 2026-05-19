<!-- Comnponent to display some of my best projects to date -->
<template>
    <div class="fade-up">
        <h1 class="section-header green"> // Projects</h1>

        <!-- Grid to diplay my three best project so far -->
        <!-- Uses a Json to gather the parts needed to dynamically make each card -->
        <div class="grid-auto">
            <div v-for="project in projects" :key="project.id" class="glass-card">
                <!-- the entire card displayed is a link that takes the user to the GitHub of that project -->
                <a :href="project.url" target="blank" class="project-link">
                    <div class="card-content">
                        <h3>{{ project.title }}</h3>

                        <div class="card-top">
                            <span class="tag">Project</span>
                        </div>


                        <p>
                            {{ project.description }}
                        </p>

                    </div>
                </a>
            </div>

        </div>

        <!-- Button to take the user to the Project page to see al my projects -->
        <div class="btn-row">
            <router-link to="/projects" class="btn btn-primary">
                Open Projects.json
            </router-link>
        </div>

    </div>
</template>

<script setup>
// Json of my projects to display
const projects = [
    {
        id: 1,
        title: "ARK Breeding Companion App",
        description:
            "C# tool for managing ARK breeding—tracking stats, optimizing pairings, and simplifying complex workflows.",
        url: "https://github.com/Aethereal-Phoenix/Ark-Breeding-Calculator"
    },
    {
        id: 2,
        title: "C# Practice Projects",
        description:
            "Small applications and exercises reinforcing core C# concepts and problem-solving skills.",
        url: "https://github.com/Aethereal-Phoenix/Csharp_Players_Guide_5th_Edition"
    },
    {
        id: 3,
        title: "Developer Portfolio Website",
        description:
            "Vue-based portfolio showcasing projects and skills, built with reusable components and clean structure.",
        url: "https://github.com/Aethereal-Phoenix/Digital-Resume"
    }
]
</script>

<style scoped>
.project-link {
    text-decoration: none;
    color: inherit;
    display: block;
}

.project-link:hover .glass-card {
    transform: translateY(-4px);
    transition: 0.25s ease;
    cursor: pointer;
}

h3 {
    margin: 0
}
</style>