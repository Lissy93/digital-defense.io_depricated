<template>
    <header class="hero">
        <div class="left">
            <h2>Tools, Guides and Lists to defend your digital life against threats</h2>
            <div class="software-list hero-button">Awesome Software List</div>
            <div class="full-list hero-button">Personal Security Checklist</div>
            <div class="get-started hero-button">Get Started</div>
        </div>
        <div class="right">
            <!-- <img
                class="hero-logo"
                src="../../assets/icons/dd-hero.png" 
                alt="Logo"
            /> -->
        </div>
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
    display: flex;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.25);
    min-height: 16rem; // May not be needed with more content
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
    .left {
        flex: 1;
    }
    .right {
        text-align: right;
        background-image: url('../../assets/icons/dd-hero.png');
        background-size: auto 100%;
        width: 20%;
        background-repeat: no-repeat;
        background-position-x: right;
    }
}

</style>
