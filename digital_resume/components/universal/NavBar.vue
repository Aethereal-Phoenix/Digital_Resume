<template>
    <div class="layout">

        <!-- Solution Explorer (Navigation bar) -->
        <aside class="activity-bar">

            <div class="top-icons">

                <!-- Menu Button -->
                <!-- Will open the nav bar using @click which works like an eventListener -->
                <button ref="menuButtonRef" class="icon-button active" @click.stop="toggleMenu">
                    ☰
                </button>

                <!-- Vertical Title -->
                <!-- Displays the title reading from the top down like in Visual Studio -->
                <div class="explorer-title">
                    Solution Explorer
                </div>

                <!-- Settings -->
                <!-- WIll later add the dark/light mode toggle in thus  -->
                <!-- <button class="icon-button">
                    ⚙
                </button> Want to turn this into a light/dark mode toggle -->

            </div>

        </aside>

        <!-- Explorer Panel -->
        <aside ref="explorerRef" :class="['explorer', { open: isOpen }]">

            <div class="explorer-content">

                <div class="section-title">
                    PORTFOLIO
                </div>

                <nav>

                    <button @click="navigate('/')">
                        > Home.vue
                    </button>

                    <button @click="navigate('/about')">
                        > AboutMe.cs
                    </button>

                    <button @click="navigate('/projects')">
                        > Projects.json
                    </button>

                    <button @click="navigate('/contact')">
                        > Contact.md
                    </button>

                </nav>

                <Pokemon />
            </div>

        </aside>

    </div>
</template>

<script setup>
// Imports
import {
    ref,               // Creates reactive variables that Vue tracks for updates
    onMounted,         // Runs code when the component is added to the page
    onBeforeUnmount    // Runs code right before the component is removed
} from 'vue'
import { useRouter } from 'vue-router'
import Pokemon from './Pokemon.vue'

// Creates a router instance
const router = useRouter()

// Tracks whether the navigation drawer is open or closed
const isOpen = ref(false)

// References to actual HTML elements in the template
// Checks if something was clicked
const explorerRef = ref(null)
const menuButtonRef = ref(null)

// NAVIGATION MENU FUNCTIONS

// Opens or closes the sidebar menu
// If currently open -> close it
// If currently closed -> open it
function toggleMenu() {
    isOpen.value = !isOpen.value
}


// Handles page navigation
function navigate(route) {
    // Changes the view to the selected component
    router.push(route)

    toggleMenu();
}

// OUTSIDE CLICK DETECTION

// Detects clicks/touches anywhere on the screen
function handlePointerDown(event) {

    // Checks if the click happened INSIDE the explorer/sidebar
    const clickedExplorer =
        explorerRef.value?.contains(event.target)

    // Checks if the click happened on the menu button itself
    const clickedMenuButton =
        menuButtonRef.value?.contains(event.target)

    // If the click was NOT inside either element,
    // then the user clicked outside the navbar area
    if (!clickedExplorer && !clickedMenuButton) {

        // Close the navbar
        isOpen.value = false
    }
}

// COMPONENT LIFECYCLE

// Runs once when the component is added to the page
onMounted(() => {

    // Adds a global listener that watches for clicks/touches
    // anywhere on the screen
    window.addEventListener(
        'pointerdown',
        handlePointerDown
    )
})


// Runs right before the component is removed
onBeforeUnmount(() => {

    // Removes the event listener to prevent:
    // - memory leaks
    // - duplicate listeners
    // - unexpected behavior
    window.removeEventListener(
        'pointerdown',
        handlePointerDown
    )
})

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

/* Activity Bar */

.activity-bar {
    width: var(--SE-width-closed);
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

    color: var(--text-secondary);

    cursor: pointer;

    font-size: var(--text-lg);

    transition: 0.2s;
}

.icon-button:hover {
    background: var(--bg-tertiary);
}

.icon-button.active {
    background: var(--bg-tertiary);

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
    width: 200px;
}

/* VERTICAL LABEL */

.explorer-title {
    writing-mode: vertical-rl;

    background: var(--bg-secondary);

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
    color: var(--text-secondary);

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

    padding: var(--space-2xs) 0;

    border-radius: var(--radius-xs);

    cursor: pointer;

    font-size: var(--text-base);
}

nav button:hover {
    background: var(--bg-tertiary);
}
</style>