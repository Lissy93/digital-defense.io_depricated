<template>
  <div class="main-page-links">
    <p>hello</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MainPageLinks extends Vue {}
</script>

<style scoped lang="scss">
    .main-page-links{
        position: relative;
        z-index: 5;
        background: #2c3e50;
        border: 1em solid transparent;
    
        
    }
</style>
