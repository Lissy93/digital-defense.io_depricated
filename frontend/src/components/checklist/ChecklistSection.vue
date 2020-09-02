<template>
    <section class="checklist-section">
      <h2>#{{order}} - {{title}}</h2>
      <div class="section-content">
        <span class="section-intro"  v-html="intro"></span>
        <div class="section-table">
          <div class="table-cell title"></div>
          <div class="table-cell tags"></div>
          <div class="table-cell description"></div>
        </div>
      </div>
    </section>
</template>

<static-query>

</static-query>

<script>

export default {
  name: 'ChecklistSection',
  props: {
    order: Number,
    title: String,
    intro: String,
  }
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
      span.section-intro {
        font-size: $body-font-medium;
      }

      .section-table {
        .table-cell {
          &.title {}
          &.tags {}
          &.description {}
        }
      }
    }
  }

</style>
