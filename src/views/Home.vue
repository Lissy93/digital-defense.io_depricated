<template>
  <div class="home">
    <WelcomeHero />
    <MainPageLinks />
    <!-- <PageIntro /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WelcomeHero from '@/components/WelcomeHero.vue';
import PageIntro from '@/components/PageIntro.vue';
import MainPageLinks from '@/components/MainPageLinks.vue';

@Component({
  components: {
    WelcomeHero,
    PageIntro,
    MainPageLinks,
  },
})
export default class Home extends Vue {}
</script>

