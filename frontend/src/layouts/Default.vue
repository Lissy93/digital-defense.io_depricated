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

</style>
