<template>

  <div id="app">


	<header>
		 <h1 class="logo">
        <router-link to="/">
          <img src="../public/img/main-icon.png" alt="">
          Cyber Defence
        </router-link>
      </h1>
      <ul class="main-nav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
      </ul>
	</header> 

  <router-view></router-view>
  
  </div>

</template>


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


