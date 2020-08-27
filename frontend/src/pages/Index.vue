<template>
  <Layout>
    <Hero />
    <ArticleGrid />
  </Layout>
</template>

<script>

import Hero from '~/components/structural/Hero';
import ArticleGrid from '~/components/structural/ArticleGrid';

export default {
  metaInfo: {
    title: 'Digital Defense'
  },
  components: {
    Hero,
    ArticleGrid,
  },
}
</script>

<style lang="scss">
  .layout {
    background: $background;
  }
</style>
