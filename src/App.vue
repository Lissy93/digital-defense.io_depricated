<template>

  <div id="app">

    <div class="wrapper" v-bind:class="{ 'dark-bg': $route.name.includes('home') }">

      <!-- Header containing navigation bar (don't show on home) -->
      <NavBar v-if="['home'].indexOf($route.name) < 0" />

    <!-- Main Content -->
    <main>
      <transition name="slide-left">
        <router-view/>
      </transition>
    </main>

    <!-- Magic Trick for Stickey Footer -->
    <div class="push" />

    </div> <!--End Wrapper -->
  
    <!-- Footer -->
    <Footer class="footer"/>

  </div>

</template>
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script lang="ts">

  import { Component, Vue } from 'vue-property-decorator';



  import NavBar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';

  @Component({
    components: {
      NavBar,
      Footer,
    },
})
export default class Home extends Vue {}

</script>

<style src="typeface-dosis/index.css" />
<style src="typeface-raleway/index.css" />>


<style lang="scss">
@import 'styles/global-styles';
@import 'styles/colors';

html, body, #app {
  margin: 0;
  height: 100%;
  background: $pale-grey;
  text-align: center;
}

.wrapper {
  min-height: 100%;
  margin-bottom: -2.2em ;
}
.footer, .push {
  min-height: 2em;
  font-size: 0.8em;
}
.dark-bg {
  background: $blue;
}
</style>


