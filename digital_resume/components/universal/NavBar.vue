<template>
    <div class="layout">

        <!-- ACTIVITY BAR -->
        <aside class="activity-bar">

            <div class="top-icons">

                <button class="icon-button active" @click="toggleMenu">
                    ☰
                </button>

                <!-- Vertical Title -->
            <div class="explorer-title">
                Solution Explorer
            </div>

            <button class="icon-button">
                    ⚙
                </button>
            </div>

        </aside>

        <!-- EXPLORER PANEL -->
        <aside :class="['explorer', { open: isOpen }]">

            <!-- Content -->
            <div class="explorer-content">

                <div class="section-title">
                    PORTFOLIO
                </div>

                <nav>

                    <button @click="navigate('/')">
                         >AboutMe.vue
                    </button>

                    <button @click="navigate('/projects')">
                        >Projects/
                    </button>

                    <button @click="navigate('/skills')">
                        >Skills.json
                    </button>

                    <button @click="navigate('/contact')">
                        >Contact.md
                    </button>

                </nav>

            </div>

        </aside>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isOpen = ref(true)

function toggleMenu() {
    isOpen.value = !isOpen.value
}

function navigate(route) {
    router.push(route)
}
</script>

<style scoped>
.layout {
    position: fixed;
    top: 0;
    right: 0;

    height: 100vh;

    display: flex;

    z-index: 2000;
}

/* ACTIVITY BAR */

.activity-bar {
    width: var(--space-xl);
    height: 100%;

    background: var(--bg-secondary);

    border-left: 1px solid var(--accent);

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: var(--space-md);
}

.top-icons {
    display: flex;
    flex-direction: column;
    gap: var(--space-2xs);
}

.icon-button {
    width: var(--space-lg);
    height: var(--space-lg);

    border: none;
    border-radius: var(--radius-xs);

    background: transparent;
    color:var(--text-secondary);
    cursor: pointer;

    font-size: var(--text-lg);

    transition: 0.2s;
}

.icon-button:hover {
    background: #2d2d2d;
}

.icon-button.active {
    background:var(--bg-tertiary);
    color: var(--text-primary);
}

/* EXPLORER */

.explorer {
    width: 0;

    overflow: hidden;

    height: 100%;

    background: var(--bg-secondary);

    border-left: 1px solid var(--bg-tertiary);

    transition: width 0.25s ease;

    display: flex;
}

.explorer.open {
    width: 125px;
}

/* VERTICAL LABEL */

.explorer-title {
    writing-mode: vertical-rl;

    background:var(--bg-secondary);

    color: var(--text-secondary);

    padding: var(--space-sm) var(--space-2xs);

    font-size: var(--text-base);

    border-left: 1px solid var(--bg-secondary);
    border-right: 1px solid var(--bg-secondary);
}

/* PANEL CONTENT */

.explorer-content {
    flex: 1;

    padding: var(--space-sm);
}

.section-title {
    color:var(--text-secondary);

    font-size: var(--space-xs);

    margin-bottom: var(--space-sm);

    letter-spacing: 1px;
}

nav {
    display: flex;
    flex-direction: column;
}

nav button {
    background: transparent;
    border: none;

    color: var(--text-primary);

    text-align: left;

    padding: var(--space-2xs) 0 var(--space-2xs) 0 ;

    border-radius: var(--radius-xs);

    cursor: pointer;

    font-size: var(--text-base);
}

nav button:hover {
    background: var(--bg-tertiary);
}
</style>