<template>
  <section class="checklist-section">
    <h2>#{{order}} - {{title}}</h2>
    <div class="section-content">
      <div class="section-intro" v-html="intro"></div>
      <ChecklistTable v-if="items.length > 0" :items="items" />
    </div>
  </section>
</template>

<script>
import ChecklistTable from '~/components/checklist/ChecklistTable';

export default {
  name: 'ChecklistSection',
  props: {
    order: Number,
    title: String,
    intro: String,
    items: Array,
  },
  components: {
    ChecklistTable,
  },
}
</script>

<style lang="scss">
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
      div.section-intro p {
        font-size: $body-font-medium;
        margin-bottom: 1rem;
      }
    }
  }
</style>
