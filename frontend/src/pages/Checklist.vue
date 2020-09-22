<template>
  <Layout>
    <h1 class="title">The Ultimate Privacy & Security Checklist</h1>
    <ChecklistSection
      v-for="section in $page.allDdChecklistSection.edges"
      v-bind:key="section.node.id"
      :order="section.node.order"
      :title="section.node.title"
      :intro="section.node.intro"
      :items="section.node.items"
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
  },
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
        items {
          id
          name
          level
          details
          order
        }
      }
    }
  }
}
</page-query>

<style lang="scss">

  h1.title {
    color: $white; 
    text-align: center;
    font-size: $heading-font-large;
    margin: 2rem;
  }

  /* Some adjustments to the outer-page */
  .layout {
	  background: $primary;
  }
  header.dd-nav-bar {
	  border-bottom: 2px solid $accent1;
  }
  .sub-nav.open {
    border: 1px solid $accent1;
  }

</style>
