<template>
  <div class="home">
    <DangerHero />
    <MainPageLinks />
    <!-- <PageIntro /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DangerHero from '@/components/DangerHero.vue';
import PageIntro from '@/components/PageIntro.vue';
import MainPageLinks from '@/components/MainPageLinks.vue';

@Component({
  components: {
    DangerHero,
    PageIntro,
    MainPageLinks,
  },
})
export default class Home extends Vue {}
</script>

