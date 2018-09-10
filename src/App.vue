<template>

  <div id="app">


	<header>
		 <h1 class="logo">
        <router-link to="/">
          <img src="../public/img/main-icon.png" alt="" v-click-outside="closeAllDropdowns">
          Cyber Defence
        </router-link>
      </h1>
      <ul class="main-nav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/beginer">Beginer</router-link></li>
          <li><router-link to="/intermediate">Intermediate</router-link></li>
          <li><router-link to="/advanced">Advanced</router-link></li>
          <li>
            <div @mouseover="closeAllDropdowns(); showingSpecifics = true">
              <router-link to="/specifics">Specifics</router-link>
            </div>
            <ul class="sub-nav" v-show="showingSpecifics">
              <li><router-link to="/advanced/passwords">Passwords</router-link></li>
              <li><router-link to="/advanced/2fa">2-Factor Auth</router-link></li>
              <li><router-link to="/advanced/updates">Updates</router-link></li>
            </ul>
          </li>
          <li>
            <div @mouseover="closeAllDropdowns(); showingTools = true">
              <router-link to="/tools">More</router-link>
            </div>
            <ul class="sub-nav" v-show="showingTools">
              <li><router-link to="/advanced/check">Have you been hacked?</router-link></li>
              <li><router-link to="/advanced/hacks">Live Hack Map</router-link></li>
              <li><router-link to="/advanced/news">Cyber Security News</router-link></li>
              <li><router-link to="/advanced/links">Helpful Links</router-link></li>
            </ul>
          </li>
          <li><router-link to="/about">About</router-link></li>
      </ul>
	</header> 


  <router-view></router-view>
  
  </div>

</template>

<script lang="ts">

  import { Component, Vue } from 'vue-property-decorator';
  const ClickOutside = require('./directives/ClickOutside.js');


  @Component({
  data: () => {
    return { 
      showingSpecifics: false,
      showingTools: false,
    };
  },
  methods: {
    closeAllDropdowns () {
      this.$data.showingSpecifics = false
      this.$data.showingTools = false
    }
  },
  directives: {
    ClickOutside
  }
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


