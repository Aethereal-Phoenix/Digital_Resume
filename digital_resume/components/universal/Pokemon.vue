<!-- Component to show a randon pokemon and its data ever 10 seconds -->
<template>
    <div class="pokemon-card">

        <!-- Name + Dex Number -->
        <div class="top-row">
            <span class="name">{{ pokeName }}</span>
            <span class="poke-id">#{{ pokeId }}</span>
        </div>

        <!-- Pokemon Sprite -->
        <div class="sprite-container">
            <img :src="pokeSprite" :alt="pokeName">
        </div>

        <!-- Pokemon Types -->
        <div class="bottom-row">

            <span class="type">
                {{ pokeType1 }}
            </span>

            <!-- Only shows if second type exists -->
            <span
                v-if="pokeType2"
                class="type"
            >
                {{ pokeType2 }}
            </span>

        </div>

    </div>
</template>

<script setup>
// Import
import { ref } from 'vue'

// Initialize globally scoped vvariables so the state of the pokemon object can be maintained once the functions runs
let pokeSprite = ref("");
let pokeName = ref("");
let pokeId = ref("");
let pokeType1 = ref("");
let pokeType2 = ref("");

// A funtion to call the pokeApi website and pull the needed data out to display
async function callPokemonApi() {
    // Generates a random number
    let randomPokemonId = Math.floor(Math.random() * 1028) + 1;

    // Calls the api
    const apiCall = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}/`);

    // Takes the data from the api call and turns it into a JSON object 
    let pokeJson = await apiCall.json();

    // Gets the front sprite image
    pokeSprite.value = pokeJson.sprites.front_default;

    // Gets the species name
    pokeName.value = pokeJson.species.name;

    // Gets the PokeDex id
    pokeId.value = pokeJson.id;

    // Gets the 1st type
    pokeType1.value = pokeJson.types[0].type.name;

    // Optional second type
    pokeType2.value = pokeJson.types[1] ? pokeJson.types[1].type.name : "";
}


// Runs immediately when the page first loads
callPokemonApi();

// Runs every 10 seconds
setInterval(callPokemonApi, 5000);
</script>

<style scoped>

.pokemon-card {
    margin-top: var(--space-xl);
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 0.4rem;

    padding: 0.5rem;
}

.top-row {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.sprite-container img {
    width: 72px;
    height: 72px;

    image-rendering: pixelated;
}

.bottom-row {
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
    justify-content: center;
}

.type {
    padding: 0.15rem 0.5rem;

    border-radius: 999px;

    font-size: 0.75rem;

    background: rgba(255,255,255,0.08);
}

.name {
    text-transform: capitalize;
    font-weight: 600;
    font-size: var(--text-base)
}

.poke-id {
    opacity: 0.7;
    font-size: var(--text-base);
}

</style>