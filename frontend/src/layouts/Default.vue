<template>
  <div class="layout">
    <NavBar />
    <slot/>
  </div>
</template>

<script>
import NavBar from '../components/structural/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>


</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
@font-face {
    font-family: ZillaSlab;
    src: url('../assets/fonts/ZillaSlab-Regular.ttf');
    font-weight: normal;
}
@font-face {
    font-family: Cairo;
    src: url('../assets/fonts/Cairo-Regular.ttf');
    font-weight: normal;
}
</style>
