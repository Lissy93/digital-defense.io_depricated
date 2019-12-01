<template>
  <div class="home-carousel">
    <carousel 
      :perPage="1"
      :autoplay="true"
      :autoplayHoverPause="true"
      paginationActiveColor="#22aef6"
      :autoplayTimeout="8000"
      :loop="true"
    >
        <slide v-for="carouselItem in carouselContent" v-bind:key="carouselItem.heading">
          <h2>{{ carouselItem.heading }}</h2>
          <span>{{ carouselItem.subtitle }}</span>
          <br>
          <small>
            Reference:
            <a :href="carouselItem.reference.url" target="_blank">
              {{ carouselItem.reference.title}}
            </a>
          </small>
        </slide>
    </carousel>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { Carousel, Slide } from 'vue-carousel';

import * as carouselContent from './../data/carousel-content.json';

@Component({
    data: () => {
      return  {
        carouselContent: carouselContent.default,
      };
    },
  components: {
    Carousel,
    Slide,
  },
})
export default class HomeCarousel extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  * { // Note, this is being applied to all children of this component. * is not great practice.
    text-align: center;
  }
  span{
    font-size: 1.2rem;
  }
  small {
    font-size: 0.8rem;
    opacity: 0.8;
    a{
      color: inherit;
    }
  }
  /deep/.VueCarousel-dot-container {
    opacity: 0.8;
  }

</style>
