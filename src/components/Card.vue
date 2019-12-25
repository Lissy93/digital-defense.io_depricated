<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Card extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card{
    background: #FFF;
    box-shadow: 
        0 -1px 0 #e0e0e0, 
        0 0 2px rgba(0,0,0,.12), 
        0 2px 4px rgba(0,0,0,.24);
    border-radius: 8px;

}
</style>
