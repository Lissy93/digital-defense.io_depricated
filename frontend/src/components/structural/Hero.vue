<template>
    <header class="hero">
        <h2>Tools, Guides and Lists to defend your digital life against threats</h2>
        <div class="software-list hero-button">Awesome Software List</div>
        <div class="full-list hero-button">Personal Security Checklist</div>
        <div class="get-started hero-button">Get Started</div>
    </header>
</template>

<static-query>

</static-query>

<script>

export default {
  name: 'Hero',
}
</script>

<style lang="scss">
.hero {
    background: $accent1;
    margin: 0;
    height: 15rem;
    h2 {
        margin: 0;
        padding: 1rem;
        color: $primary;
        font-size: 1.8rem;
    }
    .hero-button {
        border: 2px solid $primary;
        border-radius: 8px;
        padding: 0.5rem;
        margin: 0.5rem;
        display: inline-flex;
        min-width: 180px;
        font-size: 1.8rem;
        &.get-started {
            background: $primary;
            color: $accent1;

        }
    }
}

</style>
