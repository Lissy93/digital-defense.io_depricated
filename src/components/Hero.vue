<template>
  <div class="hero" id="particles-js">
    <div class="hero-child">
      <HomeCarousel />
    </div>
    <div class="hero-child main-logo-in-hero">
      <img src="../../public/img/hero-scaled.png" alt=""> 
    </div>
    <div class="hero-child what-is-this-site">
      <h3>
        This site outlines common security risks, and 
        explains the steps you can take to stay protected.
        </h3>
      <h4 class="get-started-button" v-on:click="scrollTo('.main-page-links')">
        ▼ Get Started Now ▼
      </h4>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import HomeCarousel from '@/components/Carousel.vue';
import 'particles.js';
import * as particleData from './../data/particles-js-config.json';

@Component({
  components: {
    HomeCarousel,
  },
  methods: {
    scrollTo(elem) {
      document.querySelector(elem).scrollIntoView({
        behavior: 'smooth',
      });
    },
  },
  mounted: () => {
    // Initialize the particles.js on the hero.
    (window as any).particlesJS('particles-js', particleData.default);
  },
})
export default class Hero extends Vue {}
</script>

<style scoped lang="scss">
  .hero{
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 2em;
    background: #ee6e73;
    color: #2c3e50;
    box-shadow: 0 -1px 0 rgba(225,225,225,.12), 0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.24);
    text-align: center;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
  
    > * {
      z-index: 3;
    }

    .hero-child {
        width: 100%;
        @media (min-width: 769px) {
          &:nth-child(1) { width: 70% }
          &:nth-child(2) { width: 30% }
        }

      &.main-logo-in-hero{
          display: flex;
          justify-content: center;
          align-items: center;
      }

      &.what-is-this-site{
          color: white;
          opacity: 0.9;
          h3, .get-started-button {
            text-align: center;
            background: #2c3e50;
            padding: 0.5em;
            box-shadow: 1px 1px 1px rgba(255,255,255, 0.4);
            border-radius: 5px;
        }
      }
    }

    .get-started-button {
      cursor: pointer;
      max-width: 704px;
      display: block;
      @media (min-width: 769px) {
        display: none;
      }
      margin: 0 auto;
    }

    img{
      max-width: 450px;
      width: 90%;
      margin: 0 auto;
    }

    h2, h3{
      text-shadow: 
        0 -1px 0 rgba(225, 225, 225, 0.12), 
        0 0 2px rgba(0, 0, 0, 0.12), 
        0 2px 4px rgba(0, 0, 0, 0.24);
    }
  }

</style>


<style>
  .particles-js-canvas-el{
    position: absolute;
    padding: 0;
    height: 100%;
    z-index: 1;
    top: 0;
    left:0;
    opacity: 0.5;
  }
</style>
