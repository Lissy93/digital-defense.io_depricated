<template>
  <div class="hero" id="particles-js">
    <div class="hero-child">
      <h2>
        Cyber Crime is on the Up.
        <br>
        <small>This site explains the steps that you need to take to protect yourself.</small>
      </h2>
    </div>
    <div class="hero-child">
      <img src="../../public/img/hero-scaled.png" alt=""> 
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import 'particles.js'

const particleData = require('./../data/particles-js-config.json');


@Component({
  methods: {
      initParticlesJS() {
      },
    },
    mounted: ()=> {
      // Initialize the particles.js on the hero.
      (<any>window).particlesJS('particles-js', particleData);
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
          &:nth-child(1) { width: 65% }
          &:nth-child(2) { width: 35% }
        }
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
  }
</style>
