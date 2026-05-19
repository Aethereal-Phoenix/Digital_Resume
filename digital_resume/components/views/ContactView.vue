<!-- Contact page styled to match the IDE-inspired portfolio theme -->
<template>
    <div class="page contact-page fade-up">

        <!-- ==================== -->
        <!-- Header               -->
        <!-- ==================== -->

        <section class="section">

            <h1 class="section-header green">
                // Contact
            </h1>

            <p class="section-text">
                <span class="teal">Console</span>.<wbr><span class="yellow">WriteLine</span>(<span
                    class="orange">"Questions, opportunities, collaborations, or project inquiries — feel free to send
                    a message."</span>);
            </p>

        </section>

        <!-- ==================== -->
        <!-- Contact Form         -->
        <!-- ==================== -->

        <section class="contact-wrapper">

            <form action="https://formsubmit.co/6e3b188ede6049622d2d41cb939c6ebc" method="POST"
                class="contact-card glass-card">

                <!-- FormSubmit -->
                <input type="hidden" name="_captcha" value="false">

                <!-- Optional -->
                <input type="hidden" name="_subject" value="New Portfolio Contact Submission">

                <!-- ==================== -->
                <!-- Name Row             -->
                <!-- ==================== -->

                <div class="row two-column">

                    <div class="input-group">

                        <label for="firstName">
                            // firstName
                        </label>

                        <input type="text" id="firstName" name="firstName" placeholder="John"
                            pattern="[A-Za-z]+" title="First name cannot contain numbers." required>

                    </div>

                    <div class="input-group">

                        <label for="lastName">
                            // lastName
                        </label>

                        <input type="text" id="lastName" name="lastName" placeholder="Doe"
                            pattern="[A-Za-z]+" title="Last name cannot contain numbers." required>

                    </div>

                </div>

                <!-- ==================== -->
                <!-- Contact Info         -->
                <!-- ==================== -->

                <div class="row two-column">

                    <div class="input-group">

                        <label for="email">
                            // email
                        </label>

                        <input type="email" id="email" name="email" placeholder="example@email.com" required>

                    </div>

                    <div class="input-group">

                        <label for="phone">
                            // phoneNumber
                        </label>

                        <input type="tel" id="phone" name="phone" placeholder="123-456-7890"
                            pattern="[0-9\-()\s]+" title="Phone number cannot contain letters.">

                    </div>

                </div>

                <!-- ==================== -->
                <!-- Message              -->
                <!-- ==================== -->

                <div class="input-group text-field">

                    <label for="message">
                        // message
                    </label>

                    <textarea id="message" name="message" rows="8"
                        placeholder="// Tell me about your project, question, or opportunity..."
                        required></textarea>

                </div>

                <!-- ==================== -->
                <!-- Submit Button        -->
                <!-- ==================== -->

                <div class="button-row">

                    <button type="submit" class="btn btn-primary">
                        Execute SendMessage()
                    </button>

                </div>

            </form>

        </section>

    </div>
</template>

<style scoped>

/* ==================== */
/* Mobile First Layout  */
/* ==================== */

.button-row .btn {
    justify-content: center;
}

/* ==================== */
/* Contact Wrapper      */
/* ==================== */

.contact-wrapper {
    width: 100%;

    display: flex;
    justify-content: flex-start;
}

/* ==================== */
/* Contact Card         */
/* ==================== */

.contact-card {
    width: 100%;

    max-width: 700px;

    padding: var(--space-xs);
}

/* ==================== */
/* Form Layout          */
/* ==================== */

.row {
    display: flex;
    flex-direction: column;

    gap: var(--space-sm);

    margin-bottom: var(--space-sm);
}

.input-group {
    display: flex;
    flex-direction: column;

    gap: var(--space-2xs);

    width: 100%;
}

.text-field {
    margin-bottom: var(--space-md);
}
/* ==================== */
/* Labels               */
/* ==================== */

label {
    color: var(--vs-green);

    font-size: var(--text-sm);

    opacity: 0.9;
}

/* ==================== */
/* Inputs               */
/* ==================== */

input,
textarea {
    width: 100%;

    padding: var(--space-xs);

    background: rgba(255, 255, 255, 0.03);

    border: 1px solid var(--border-light);

    border-radius: var(--radius-2xs);

    color: var(--text-primary);

    font-family: inherit;

    font-size: var(--text-base);

    transition:
        border-color var(--transition-fast),
        background var(--transition-fast),
        box-shadow var(--transition-fast);
}

input::placeholder,
textarea::placeholder {
    color: rgba(255, 255, 255, 0.35);
}

input:focus,
textarea:focus {
    outline: none;

    border-color: var(--accent);

    background: rgba(255, 255, 255, 0.05);

    box-shadow: 0 0 0 1px rgba(118, 0, 255, 0.35);
}

textarea {
    resize: vertical;

    min-height: 160px;
}
</style>