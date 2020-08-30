<template>
  <Layout>
    <h1 class="title">The Ultimate Privacy & Security Checklist</h1>
    <section
      class="checklist-section"
      v-for="section in $page.allDdChecklistSection.edges"
      v-bind:key="section.node.id"
    >
      <h2>#{{section.node.order}} - {{section.node.title}}</h2>
      <div class="section-content">
        <span class="section-intro">
          {{section.node.intro}}
        </span>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Checklist'
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
  section.checklist-section {
    min-height: 600px;
    max-width: 1200px;
    margin: 2rem auto;
    background: $white;
    border: 2px solid $accent1;
    box-shadow:
      0 8px 18px rgba(21, 30, 63, 0.17),
      0 5px 8px rgba(21, 30, 63, 0.17);
    h2 {
      font-size: $heading-font-medium;
      color: $primary;
      background: $accent1;
      padding: 1rem;
    }
    .section-content {
      padding: 1rem;
      span.section-intro {
        font-size: $body-font-medium;
      }
    }
  }

</style>
