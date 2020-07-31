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
    title: 'Hello, world!'
  },
  components: {
    Hero,
    ArticleGrid,
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
