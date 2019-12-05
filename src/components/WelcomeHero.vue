<template>
  <div v-if="!this.$slots.default" class="welcome-hero" >
    <!-- <div class="particles-js-canvas-el" id="particles-js"></div> -->
    <div class="hero-child hc1">
      <h1>Digital Defense</h1>
      <p class="subtitle">
        Guides, tools and knowledge - to help you keep 
        your personal data protected in a dangerous digital world.
      </p>
    </div>
    <div class="hero-child hc2 main-logo-in-hero">
      <img src="../../public/img/hero-scaled.png" alt=""> 
    </div>
    <nav>
      <router-link to="/ultimate-checklist">
        <AnimatedButton>The Ultimate Checklist</AnimatedButton>
      </router-link>
    </nav>
  </div>
  <div v-else class="welcome-hero" >
    <slot></slot>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import HomeCarousel from '@/components/Carousel.vue';
import AnimatedButton from '@/components/AnimatedButton.vue';
// import 'particles.js'

// const particleData = require('./../data/particles-js-config.json');

@Component({
  components: {
    AnimatedButton,
    HomeCarousel,
  },
  // methods: {
  //   initParticlesJS() {
  //     console.log('Just Initing');
  //   },
  // },
  // mounted: ()=> {
    // Initialize the particles.js on the hero.
    // (<any>window).particlesJS('particles-js', particleData);
  // },
})
export default class WelcomeHero extends Vue {}
</script>

<style scoped lang="scss">

  @import '../styles/colors';

> * {
      z-index: 3;
    }
  .particles-js-canvas-el{
    opacity: 0.3;
    width: 100%;
    position: absolute;
    padding: 0;
    height: 100%;
    z-index: 1;
    top: 0;
    left:0;
  }
  .welcome-hero{
    width: 100%;
    display: flex;    
    padding: 2em 0 4em;
    flex-flow: wrap;
    background: $gradient;
    color: $blue;
    text-align: left;

    box-shadow: 0 8px 13px -2px #00000075;

    h1 {
      text-align: left;
      color: #031636b0;
      text-shadow: 
        0 -1px 0 rgba(225, 225, 225, 0.12), 
        0 0 2px rgba(0, 0, 0, 0.12), 
        0 2px 4px rgba(0, 0, 0, 0.24);
    }
    .subtitle {
      text-align: left;
      font-size: 2rem;
      color: #03163670
    }
    nav {
      width: 100%;
      padding: 0 2%;
      @media (min-width: 769px) {
        display: flex;
        flex-direction: row;
      }
      @media (max-width: 768px) {
        text-align: center;
        button {
          width: 90%;
        }
      }

    }

  .hero-child {
    width: 100%;
    padding: 0 5%;
    @media (min-width: 769px) {
      padding: 0 2%;
      &.hc1 { width: 60% }
      &.hc2 { width: 30% }
    }
    &.main-logo-in-hero{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
      max-width: 350px;
      width: 90%;
      margin: 0 auto;
    }
  }
}

</style>

