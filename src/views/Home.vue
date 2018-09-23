<template>
  <div class="home">
    <div class="thick-bar"></div>
    <Hero msg="Protect yourself Online"/>
    <PageIntro />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Hero from '@/components/Hero.vue';
import PageIntro from '@/components/PageIntro.vue';

@Component({
  components: {
    Hero,
    PageIntro,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.thick-bar{
  background: #2c3e50;
  width: 100%;
  height: 3em;
  margin: 0;
  padding: 0;
  box-shadow: inset 0px -2px 0 0px rgba(255,255,255,0.1);
  }
</style>

