<template>

  <div id="app">

    <!-- The Loader -->
    <loading :active.sync="isLoading" 
      :can-cancel="true" 
      :on-cancel="onCancel"
      :is-full-page="true"></loading>

    <div class="wrapper">

      <!-- Header containing navigation bar (don't show on home) -->
      <Header v-if="['home'].indexOf($route.name) < 0" />

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

  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/vue-loading.css';

  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';

  // tslint:disable:no-var-requires
  const IsLoadingStore = require('./stores/IsLoadingStore.js');
  // tslint:enable:no-var-requires


  @Component({
    data() {
        return {
            isLoading: IsLoadingStore.default.getters.isLoading,
        };
    },
  components: {
    Header,
    Footer,
    Loading,
  },
})
export default class Home extends Vue {}

</script>

<style src="typeface-dosis/index.css" />
<style src="typeface-raleway/index.css" />>

<style src="./styles/global-styles.css" />

<style lang="scss">
html, body, #app {
  margin: 0;
  height: 100%;
  background: #fafafa;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.wrapper {
  min-height: 100%;
  margin-bottom: -3em ;
}
.footer, .push {
  min-height: 3em;
  font-size: 0.8em;
}
</style>


