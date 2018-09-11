<template>

  <div id="app">

    <header v-click-outside="closeAllDropdowns">

      <!-- Main Logo and Title -->
      <h1 class="logo">
          <router-link to="/">
            <img src="../public/img/main-icon.png" alt="" v-click-outside="closeAllDropdowns">
            Cyber Defence
          </router-link>
        </h1>

        <!-- Main Navigation -->
        <nav>
          <ul class="main-nav">
            <li v-for="navBarItem in navBarItems" v-bind:key="navBarItem.name" @mouseover="visibleDropdown = navBarItem.name">
              <div>
                <router-link :to="navBarItem.path">{{navBarItem.name}}</router-link>
              </div>
              <transition   
                name="slide"
                enter-active-class="slideInDown"
                leave-active-class="slideOutUp">
              <ul style="animation-duration: 0.3s" class="sub-nav" v-if="visibleDropdown == navBarItem.name">
                <li v-for="navBarItemChild in navBarItem.children" v-bind:key="navBarItemChild.name">
                  <router-link :to="navBarItemChild.path">{{navBarItemChild.name}}</router-link>
                </li>
              </ul>
              </transition>
            </li>
          </ul>
        </nav>

    </header> 

    <!-- Main Content -->
    <main>
      <router-view></router-view>
    </main>
  
  </div>

</template>

<script lang="ts">

  import { Component, Vue } from 'vue-property-decorator';

  // tslint:disable-next-line:no-var-requires
  const ClickOutside = require('./directives/ClickOutside.js');

  import NavBarItems from './models/NavBarItems';

  // tslint:disable-next-line:no-var-requires
  const navData = require('./data/nav-bar-content.json');

  // tslint:disable-next-line:no-var-requires
  require('vue2-animate/dist/vue2-animate.min.css');


  @Component({
  data: () => {
    return {
      navBarItems: (new NavBarItems()).makeTheFuckingNavbar(navData),
      visibleDropdown: '',
    };
  },
  methods: {
    closeAllDropdowns() {
      this.$data.visibleDropdown = '';
    },
  },
  directives: {
    ClickOutside,
  },
})
export default class Home extends Vue {}

</script>



<style src="typeface-dosis/index.css" />
<style src="typeface-raleway/index.css" />

<style src="./assets/global-styles.scss" />

<style src="./assets/navbar-styles.scss" />


<style lang="scss">
body {
  margin: 0;
  background: #fafafa;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>


