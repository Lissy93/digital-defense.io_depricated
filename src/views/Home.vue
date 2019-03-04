<template>
  <div class="home">
    <Hero />
    <MainPageLinks />
    <!-- <PageIntro /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Hero from '@/components/Hero.vue';
import PageIntro from '@/components/PageIntro.vue';
import MainPageLinks from '@/components/MainPageLinks.vue';

@Component({
  components: {
    Hero,
    PageIntro,
    MainPageLinks,
  },
})
export default class Home extends Vue {}
</script>

