<template>
  <div class="danger-hero">
    <div class="hero-child">
      <HomeCarousel />
    </div>
    <div class="hero-child main-logo-in-hero">
      <img src="../../public/img/hero-scaled.png" alt=""> 
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import HomeCarousel from '@/components/Carousel.vue';

@Component({
  components: {
    HomeCarousel,
  },
})
export default class DangerHero extends Vue {}
</script>

<style scoped lang="scss">

  @import '../styles/colors';

  .danger-hero{
    width: 100%;
    display: flex;
    text-align: center;
    background: $gradient;
    color: $blue;

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

    img{
      max-width: 250px;
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
}

</style>

