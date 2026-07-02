<template>
    <div class="page fade-up">

        <section class="section">

            <h1 class="section-header green">
                //<br>
                // Message_Sent<br>
                //
            </h1>

            <p class="section-text">
                <span class="teal">Console</span>.<span class="yellow">WriteLine</span>(
                <span class="orange">
                    "Thank you for reaching out. Your message has been sent successfully."
                </span>);
            </p>

            <p class="section-text">
                I will review your message and respond as soon as possible.
            </p>

            <div class="button-row">
                <RouterLink to="/" class="btn btn-primary">
                    Return Home()
                </RouterLink>
            </div>

        </section>

    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>