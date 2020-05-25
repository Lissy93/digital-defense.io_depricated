<template>
    <footer>
        <div class="footer-item">
            <a href="/">digital-defense.io</a>
        </div>
        <div class="footer-item">
            <a href="/about">About</a>
        </div>
        <div class="footer-item">
            <a href="https://github.com/Lissy93/digital-defense.io">Source Code</a>
        </div>
        <div class="footer-item">
            <a href="https://aliciasykes.com/legal">
            Privacy Policy
            </a>
        </div>
        <div class="footer-item">
            &copy; <a href="https://aliciasykes.com">Alicia Sykes</a> 2019. 
            Licensed under <a href="https://gist.github.com/Lissy93/143d2ee01ccc5c052a17">MIT</a>.
        </div>
    </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style scoped lang="scss">

@import '../styles/colors';

footer {
    width: 100%;
    margin: 0;
    background: #bbb8d424;
    display: flex;
    flex-wrap: wrap;
    font-family: 'Raleway', sans-serif;
    padding-top: 0.55em;
    .footer-item{
        line-height: 0.2em;
        flex-grow: 1;
        padding: 1em;
        min-width: 100%;
        text-align: center;
        @media (min-width: 769px) {
            min-width: 10em;
        }
        color: $dark-grey;
        a{
            color: $dark-grey;
            text-decoration: none;
            &:hover{
                text-decoration: underline;
            }
        }
    }
}
</style>
