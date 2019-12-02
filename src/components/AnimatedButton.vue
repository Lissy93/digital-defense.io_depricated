<template>
  <button class="animated button">
      <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AnimatedButton extends Vue {}
</script>

<style scoped lang="scss">

@import '../styles/colors';


$col1: #031636b0; // This is primary with a bit of opacity
$col2: #6229fe;
.button { // All colors defined here
    color: $col1;
    background: $col1;
    border: 2px solid $primary;
    &:before { background: $col2; }
    &:hover, &:focus, &:active { color: $col2; }
}

.button {
    border-radius: 12px;
    font-size: 1.8rem;
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
}

.animated {
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    transform-origin: 0% 0%;
}
.animated:before {
    border-radius: 10px;
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transform-origin: 50%;
    transform-origin: 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.2s;
    transition-duration: 0.2s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.animated:hover:before, .animated:focus:before, .animated:active:before {
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
}


</style>
