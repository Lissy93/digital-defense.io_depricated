<template>
  <div class="home-carousel">
    <carousel 
      :perPage="1"
      :autoplay="true"
      :autoplayHoverPause="true"
      paginationActiveColor="#2c3e50"
    >
        <slide>
          <h2>
            Cyber Crime is on the Up.
            <br>
            <small>This site explains the steps that you need to take to protect yourself.</small>
          </h2>
        </slide>
        <slide>
          <h2>
            Hello World
            <br>
            <small>
              Lorem Ipsum 
            </small>
          </h2>
        </slide>
    </carousel>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { Carousel, Slide } from 'vue-carousel';

@Component({
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

</style>
