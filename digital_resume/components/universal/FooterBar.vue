<!-- FooterBar.vue -->
<template>
    <footer class="footer-wrapper">

        <!-- Main Footer Content -->
        <div class="footer-content">

            <!-- Footer Header -->
            <div class="footer-title">
                <span class="green">// Footer.cs</span>
                <br>
                <span class="green">// Alex Sprague</span>
            </div>

            <!-- Footer Links -->
            <div class="footer-links">

                <a href="https://github.com/Aethereal-Phoenix" target="_blank" class="footer-link">
                    <span class="teal">Repository</span>.<wbr><span class="yellow">Open</span>(<span
                        class="orange">"GitHub"</span>);
                </a>

                <router-link to="/contact" class="footer-link">
                    <span class="teal">Navigation</span>.<wbr><span class="yellow">Open</span>(<span
                        class="orange">"Contact.md"</span>);
                </router-link>

            </div>

        </div>

        <!-- Status Bar -->
        <div class="status-bar">

            <!-- Left -->
            <div class="status-left">
                <span class="status-item">
                    <span class="light-blue">Build.Stack</span>
                    =
                    <wbr><span class="orange">["C#",<wbr> "Vue",<wbr> "ASP.NET"]</span>;
                </span>
            </div>

            <!-- Right -->
            <div class="status-right">

                <span class="status-dot"></span>

                <span class="status-text">
                    <span class="light-green">System.<wbr>Status</span>
                    =
                    <wbr><span class="orange">"Online"</span>;
                </span>

            </div>

        </div>

    </footer>
</template>

<style scoped>
/* Footer Wrapper */

.footer-wrapper {
    width: 100%;

    margin-top: var(--space-xl);

    border-top: 1px solid var(--border-light);

    background: var(--bg-secondary);
}

/* Footer Content */

.footer-content {
    width: 100%;

    padding:
        var(--space-lg) var(--space-sm);

    display: flex;
    flex-direction: column;

    gap: var(--space-md);
}

/* Footer Title */

.footer-title {
    font-size: var(--text-base);

    opacity: 0.9;
}

/* Footer Links */
.footer-links {
    display: flex;
    flex-direction: column;

    gap: var(--space-sm);
}

.footer-link {
    color: var(--text-primary);

    text-decoration: none;

    width: fit-content;

    transition:
        transform var(--transition-fast),
        opacity var(--transition-fast);
}

.footer-link:hover {
    opacity: 0.85;

    transform: translateX(4px);
}

/* Status Bar */

.status-bar {
    border-top: 1px solid var(--border-light);

    background: var(--bg-tertiary);

    min-height: 42px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: var(--space-sm);

    padding:
        var(--space-2xs) var(--space-sm);

    font-size: var(--text-sm);

    overflow-x: auto;
}

/* Status Sections */

.status-left,
.status-right {
    display: flex;
    align-items: center;

    gap: var(--space-2xs);

    white-space: nowrap;
}

.status-item,
.status-text {
    opacity: 0.85;
}

/* Online Indicator */

.status-dot {
    width: 10px;
    height: 10px;

    border-radius: 999px;

    background: var(--vs-green);

    box-shadow:
        0 0 8px rgba(90, 199, 40, 0.75);

    display: none;
}

.footer-content,
.status-bar {
    padding-left: var(--space-lg);
    padding-right: calc(var(--space-lg) + var(--SE-width-closed));
}

/* Tablet/Desktop */

@media (min-width: 768px) {

    .footer-content {
        padding:
            var(--space-xl) var(--space-lg);
    }

    .footer-links {
        flex-direction: row;
        flex-wrap: wrap;

        gap: var(--space-lg);
    }

    .status-dot {
        display: flex;
    }
}
</style>