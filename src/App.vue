<template>

  <div id="app">

    <div class="wrapper">

    <header v-click-outside="closeAllDropdowns">

      <!-- Burger menu for mobile-->
      <Burger class="bigmac" @onBurgerChange="onBurgerChange" :startIsMenuOpen="isMenuOpen"/>

      <!-- Main Logo and Title -->
      <h1 class="logo">
          <router-link to="/">
            <img src="../public/img/main-icon.png" alt="" v-click-outside="closeAllDropdowns">
            Cyber Defence
          </router-link>
        </h1>

        <!-- Main Navigation -->
        <nav>
          <ul class="main-nav" v-bind:class="{ menuOpen: isMenuOpen }">
            <li v-for="navBarItem in navBarItems" v-bind:key="navBarItem.name" @mouseover="visibleDropdown = navBarItem.name">
              <div>
                <router-link :to="navBarItem.path">{{navBarItem.name}}</router-link>
              </div>
              <ul class="sub-nav" v-bind:class="{ open: visibleDropdown == navBarItem.name }"  @mouseleave="closeAllDropdowns">
                <li v-for="navBarItemChild in navBarItem.children" v-bind:key="navBarItemChild.name">
                  <router-link :to="navBarItemChild.path">{{navBarItemChild.name}}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

    </header> 

    <!-- Main Content -->
    <main>
      <router-view/>
    </main>

    <div class="push"></div>

    </div> <!--End Wrapper -->
  
    <!-- Footer -->
    <Footer class="footer"/>

  </div>

</template>

<script lang="ts">

  import { Component, Vue } from 'vue-property-decorator';

  import NavBarItems from './models/NavBarItems';
  import Burger from './components/Burger.vue';
  import Footer from './components/Footer.vue';

  // tslint:disable-next-line:no-var-requires
  const ClickOutside = require('./directives/ClickOutside.js');

  // tslint:disable-next-line:no-var-requires
  const navData = require('./data/nav-bar-content.json');

  // tslint:disable-next-line:no-var-requires
  require('vue2-animate/dist/vue2-animate.min.css');

  @Component({
  data: () => {
    return {
      navBarItems: (new NavBarItems()).makeTheFuckingNavbar(navData),
      visibleDropdown: '',
      isMenuOpen: false, // start closed
    };
  },
  methods: {
    closeAllDropdowns() {
      this.$data.visibleDropdown = '';
    },
    onBurgerChange(openOrClose) {
      this.$data.isMenuOpen = openOrClose;
    },
  },
  directives: {
    ClickOutside,
  },
  components: {
    Burger,
    Footer,
  },
})
export default class Home extends Vue {}

</script>



<style src="typeface-dosis/index.css" />
<style src="typeface-raleway/index.css" />

<style src="./assets/global-styles.scss" />

<style src="./assets/navbar-styles.scss" />


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
  height: 3em;
}
</style>


