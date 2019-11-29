<template>
  <div class="home">
    <WelcomeHero />
    <DangerHero />
    <!-- <MainPageLinks /> -->
    <!-- <PageIntro /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WelcomeHero from '@/components/WelcomeHero.vue';
import DangerHero from '@/components/DangerHero.vue';
import PageIntro from '@/components/PageIntro.vue';
import MainPageLinks from '@/components/MainPageLinks.vue';

@Component({
  components: {
    WelcomeHero,
    DangerHero,
    PageIntro,
    MainPageLinks,
  },
})
export default class Home extends Vue {}
</script>

