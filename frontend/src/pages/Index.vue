<template>
  <Layout>
    <Hero />
  </Layout>
</template>

<script>

import Hero from '~/components/structural/Hero';

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Hero
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
