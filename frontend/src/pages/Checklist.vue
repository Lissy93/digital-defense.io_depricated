<template>
  <Layout>
    <h1 class="title">The Ultimate Privacy & Security Checklist</h1>
    <ChecklistSection
      v-for="section in $page.allDdChecklistSection.edges"
      v-bind:key="section.node.id"
      :order="section.node.order"
      :title="section.node.title"
      :intro="section.node.intro"
    />
  </Layout>
</template>

<script>

import ChecklistSection from '~/components/checklist/ChecklistSection';


export default {
  metaInfo: {
    title: 'Checklist'
  },
  components: {
    ChecklistSection,
  }
}
</script>

<page-query>
query {
  allDdChecklistSection(sortBy: "order", order: ASC) {
    edges {
      node {
        order
        title
        intro
      }
    }
  }
}
</page-query>

<style lang="scss">
  .layout {
    background: $background;
  }
  h1.title {
    color: #151e3f;
    text-align: center;
    font-size: $heading-font-large;
    margin: 2rem;
  }

</style>
