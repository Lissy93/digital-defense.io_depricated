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



<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
p, span {
  font-family: 'Raleway', sans-serif;
}

h1, h2, h3{
      font-family: 'Dosis', sans-serif;
      font-weight: normal;
}

p, a, span { font-size: 1em; }
h1 { font-size: 3em; }
h2 { font-size: 3em; }
h3 { font-size: 2em; }




</style>

<style src="./assets/navbar-styles.scss" />

