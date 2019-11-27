<template>
  <div class="welcome-hero">
    <div class="hero-child">
      <h1>Digital Defense</h1>
      <p class="subtitle">
        Guides, tools and knowledge - to help you keep 
        your personal data protected in a dangerous digital world.
      </p>
    </div>
    <div class="hero-child main-logo-in-hero">
      <img src="../../public/img/hero-scaled.png" alt=""> 
    </div>
    <nav>
      <AnimatedButton>Why?</AnimatedButton>
      <AnimatedButton>Beginers Checklist</AnimatedButton>
      <AnimatedButton>Full Checklist</AnimatedButton>
    </nav>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import HomeCarousel from '@/components/Carousel.vue';
import AnimatedButton from '@/components/AnimatedButton.vue';

@Component({
  components: {
    AnimatedButton,
    HomeCarousel,
  },
})
export default class DangerHero extends Vue {}
</script>

<style scoped lang="scss">

  @import '../styles/colors';

  .welcome-hero{
    width: 100%;
    display: flex;    
    padding: 4em 0;
    flex-flow: wrap;
    background: $gradient;
    color: $blue;
    text-align: left;

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
      &:nth-child(1) { width: 60% }
      &:nth-child(2) { width: 30% }
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

