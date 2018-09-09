<template>
  <div class="home">
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
