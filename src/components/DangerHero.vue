<template>
  <div class="danger-hero">
    <div class="hero-child">
      <HomeCarousel />
    </div>
    <div class="hero-child secondary-info">
      <p>
        The easy-to-follow guides on this site, will help you keep 
        your data protected from fraud, hacks and survelance
      </p>
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
    background: #09295e;
    padding: 1em;

    width: 100%;
    text-align: center;
    color: $secondary;

    display: flex;
    flex-direction: column;
    @media (min-width: 769px) {
      flex-direction: row;
    }

    .hero-child {
        margin-bottom: 1rem;
        width: 90%;
        @media (min-width: 769px) {
          width: 50%;
        }

      &.secondary-info{
          display: flex;
          justify-content: center;
          align-items: center;
          margin: auto;
          max-width: 20rem;
          padding: 1rem;
          margin: auto;
          background: $primary;
          font-size: 1.2rem;
          box-shadow: 1px 3px 0px 0px #00000036;
      }

    h2, h3{
      text-shadow: 
        0 -1px 0 rgba(225, 225, 225, 0.12), 
        0 0 2px rgba(0, 0, 0, 0.12), 
        0 2px 4px rgba(0, 0, 0, 0.24);
    }
  }

  // @media (max-width: 1024px) {
  //   background: yellow;
  // }

  // @media (min-width: 769px) {
  //   background: red;
  // }
}

</style>

