<!-- The main component that appears 1st on my home page to draw the viewer in -->
<template>
    <!-- The main container all the other content goes into -->
    <div class="main-container">
        <div class="main-content fade-up">
            <!-- Headline -->

            <!-- Header that is colored and styled to look like a comments from VS using C# -->
            <h1 class="section-header  green">
                // Computer Science Student
                <br>
                // Building Real Software
            </h1>

            <!-- Description -->

            <!-- Section colored and styled to look like a Console.WriteLine in VS in C# -->
            <p><span class="teal">Developer</span> <span class="light-blue">alexSprague</span> = <span
                    class="blue">new</span> <span class="teal">Developer</span>();</p>
            <p>
                <span class="teal">Console</span>.<wbr><span class=yellow>WriteLine</span>(<span
                    class="orange">"Backend-focused developer with a growing full-stack skill set, building practical
                    applications with C#
                    and modern web technologies. I focus on clean, scalable code and designing systems that can grow
                    beyond their initial scope."</span>);
            </p>
        </div>
    </div>
</template>

<!-- Styling that only applies to this component -->
<style scoped>
.main-content {
    text-align: left;
}
</style>