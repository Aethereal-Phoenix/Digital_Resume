<!-- Projects page displaying featured projects, archived work, and additional learning -->
<template>
    <div class="page fade-up">
        <!-- Featured Projects   -->

        <!-- Creates a header that is inspried by a Summary comment block in C# -->
        <h1 class="section-header green">
            //<br>// Featured_Projects<br>//
        </h1>

        <!-- Text block that is inspired by VS colors for C# -->
        <p class="section-text">
            <span class="teal">Console</span>.<wbr><span class="yellow">WriteLine</span>(<span class="orange">"Projects
                focused on real-world problem solving, scalable architecture, and learning
                development practices."</span>);
        </p>

        <div class="grid-auto">
            <!-- Featured Project Cards -->
            <div v-for="project in featuredProjects" :key="project.title" class="glass-card">

                <div class="card-content">

                    <!-- Top Section -->
                    <div>
                        <h3>{{ project.title }}</h3>

                        <div class="card-top">
                            <span class="tag">Featured</span>
                        </div>

                        <p class="description">
                            {{ project.description }}
                        </p>
                    </div>

                    <!-- Tech Stack -->
                    <div class="tags">
                        <span v-for="tech in project.tech" :key="tech" class="tag">
                            {{ tech }}
                        </span>
                    </div>

                </div>

                <!-- Buttons -->
                <div class="card-actions btn-row">

                    <a :href="project.live" target="_blank" class="btn btn-primary">
                        Open Live Site ↗
                    </a>

                    <a :href="project.repo" target="_blank" class="btn btn-secondary">
                        Open GitHub ↗
                    </a>

                </div>

            </div>

        </div>

        <!-- Archive Section -->
        <section class="section archive-section">

            <details class="archive-dropdown">

                <summary>
                    Open ProjectArchive.json
                </summary>

                <p class="archive-text">
                    Earlier coursework and foundational projects focused on responsive design,
                    semantic structure, and frontend fundamentals.
                </p>

                <div class="grid-auto archive-grid">

                    <!-- Additional Projects -->
                    <article v-for="project in additionalProjects" :key="project.title" class="glass-card archive-card">

                        <div class="card-content">

                            <div>
                                <h3>{{ project.title }}</h3>

                                <div class="card-top">
                                    <span class="tag">Archive</span>
                                </div>

                                <p class="description">
                                    {{ project.description }}
                                </p>
                            </div>

                            <!-- Tech -->
                            <div class="tags">
                                <span v-for="tech in project.tech" :key="tech" class="tag">
                                    {{ tech }}
                                </span>
                            </div>

                        </div>

                        <!-- Buttons -->
                        <div class="card-actions">

                            <a :href="project.live" target="_blank" class="btn btn-primary">
                                Live Site ↗
                            </a>

                            <a :href="project.repo" target="_blank" class="btn btn-secondary">
                                GitHub ↗
                            </a>

                        </div>

                    </article>

                </div>

            </details>

        </section>

        <!-- Additional Learning -->
        <section class="section">

            <h2 class="section-header green">
                // Additional_Learning
            </h2>

            <p class="section-text">
                <span class="teal">Console</span>.<wbr><span class="yellow">WriteLine</span>(<span
                    class="orange">"Continuous learning through independent study, experimentation, and hands-on
                    technical practice."</span>);
            </p>

            <div class="grid-auto">

                <!-- Learning Cards -->
                <article v-for="item in learning" :key="item.title" class="glass-card learning-card">

                    <div class="card-content">

                        <div>
                            <h3>{{ item.title }}</h3>

                            <div class="card-top">
                                <span class="tag">Learning</span>
                            </div>

                            <p>
                                {{ item.description }}
                            </p>
                        </div>

                    </div>

                    <div class="card-actions">

                        <a :href="item.link" target="_blank" class="btn btn-primary">
                            Open Resource ↗
                        </a>

                    </div>

                </article>

            </div>

        </section>

    </div>
</template>

<script setup>

/* Featured Projects */

const featuredProjects = [
    {
        title: 'ARK Breeding Companion App',
        description:
            'C# application designed to simplify and optimize complex breeding workflows in ARK: Survival Evolved through stat tracking, pairing analysis, and scalable data management.',
        tech: ['C#', 'ASP.NET', 'HTML', 'CSS'],
        live: '...',
        repo: 'https://github.com/Aethereal-Phoenix/Ark-Breeding-Calculator'
    },
    {
        title: 'Digital Resume',
        description:
            'Vue-powered developer portfolio built with reusable components, modular architecture, and a developer-focused UI inspired by modern IDE environments.',
        tech: ['Vue', 'JavaScript', 'HTML', 'CSS', 'Vite'],
        live: 'https://alsprague.tech',
        repo: 'https://github.com/Aethereal-Phoenix/Digital-Resume'
    },
    {
        title: 'C# Practice Projects',
        description:
            'Collection of exercises and small applications focused on strengthening core C# concepts, software architecture, and problem-solving skills.',
        tech: ['C#', '.NET'],
        repo: 'https://github.com/Aethereal-Phoenix/Csharp_Players_Guide_5th_Edition'
    }
]

/* Additional Projects  */

const additionalProjects = [
    {
        title: 'About a Company',
        description:
            'Simple website that displays use of containers, header hierarchy and themed colors to create a fake stores website.',
        tech: ['HTML', 'CSS'],
        live: 'https://aethereal-phoenix.github.io/CIS_130-About-a-Company/',
        repo: 'https://github.com/Aethereal-Phoenix/CIS_130-About-a-Company'
    },
    {
        title: 'Bed and Breakfast',
        description:
            'Multi-page hospitality website utilizing tables to show different room options and information about those rooms',
        tech: ['HTML', 'CSS'],
        live: 'https://aethereal-phoenix.github.io/CIS_130-Bed-and-Breakfast/',
        repo: 'https://github.com/Aethereal-Phoenix/CIS_130-Bed-and-Breakfast'
    },
    {
        title: 'The Funyon',
        description:
            'Satirical news-style website focused on typography hierarchy and structured layouts and displaying use of mobil first responsive design.',
        tech: ['HTML', 'CSS'],
        live: 'https://aethereal-phoenix.github.io/CIS_130-The_Funyon/',
        repo: 'https://github.com/Aethereal-Phoenix/CIS_130-The_Funyon'
    },
    {
        title: 'Fit for Fitness',
        description:
            'Fitness-oriented website designed around responsive UI principles and accessible structure. As well as displaying use of bootstrap, modals and forms to create a polished look.',
        tech: ['HTML', 'CSS'],
        live: 'https://aethereal-phoenix.github.io/CIS_130-Fit_for_Fitness/',
        repo: 'https://github.com/Aethereal-Phoenix/CIS_130-Fit_for_Fitness'
    },
    {
        title: 'Pawfect Pet Care',
        description:
            'Responsive pet care website built with a focus on usability, navigation, and layout consistency.',
        tech: ['HTML', 'CSS'],
        live: 'https://aethereal-phoenix.github.io/CIS_130-Pawfect_Pet_Care/',
        repo: 'https://github.com/Aethereal-Phoenix/CIS_130-Pawfect_Pet_Care'
    }
]

/* Additional Learning  */

const learning = [
    {
        title: 'C# Players Guide',
        description:
            'Exercises and projects completed while studying advanced C# concepts, software design, and object-oriented programming.',
        link: 'https://github.com/Aethereal-Phoenix/Csharp_Players_Guide_5th_Edition'
    },
    {
        title: 'TryHackMe',
        description:
            'Hands-on cybersecurity labs focused on Linux, networking, penetration testing, and security fundamentals.',
        link: 'https://tryhackme.com/p/AetherealPhoenix'
    }
]

</script>

<style scoped>
/* Grid Layouts */

/* MOBILE FIRST */
.learning-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-sm);
}

.description {
    margin-top: var(--space-xs);
}

/* Archive Dropdown     */

.archive-dropdown {
    background: rgba(255, 255, 255, 0.02);

    border: 1px solid var(--border-light);

    border-radius: var(--radius-xs);

    overflow: hidden;
}

.archive-dropdown summary {
    padding: var(--space-sm);

    cursor: pointer;

    list-style: none;

    font-size: var(--text-base);

    transition: var(--transition-fast);
}

.archive-dropdown summary:hover {
    background: rgba(255, 255, 255, 0.04);
}

.archive-dropdown summary::marker {
    display: none;
}

.archive-dropdown[open] summary {
    border-bottom: 1px solid var(--border-light);
}

.archive-text {
    padding:
        var(--space-sm) var(--space-sm) 0 var(--space-sm);

    opacity: 0.8;
}

.archive-grid {
    padding: var(--space-sm);
}

/* Learning Cards       */

.learning-card {
    justify-content: space-between;
}
</style>