<template>
  <div class="section-table">
    <div
      class="table-row table-heading">
      <div class="table-cell title">Title</div>
      <div class="table-cell tags">Level</div>
      <div class="table-cell description">Description</div>
    </div>
    <div
      class="table-row"
      v-for="row in items"
      v-bind:key="row.id"
    >
      <div class="table-cell title">{{row.name}}</div>
      <div class="table-cell tags">{{row.level}}</div>
      <div class="table-cell description">{{row.details}}</div>
    </div>
  </div>
</template>

<static-query>

</static-query>

<script lang="ts">
export default {
  name: 'ChecklistTable',
  props: {
    items: Array
  }
}
</script>

<style lang="scss">

.section-table {
  display: flex;
  flex-direction: column;
  border: 1px solid $primary;
  .table-row {
      display: flex;
      flex-direction: row;
    .table-cell {
      padding: 0.5rem;
      border: 1px solid $primary;
      &.title {
        width: 7rem;
      }
      &.tags {
        width: 4rem;
      }
      &.description {
        flex: 1;
      }
    }
    &.table-heading {
      background: $primary;
      .table-cell {
        color: $accent1;
        font-size: $body-font-large;
      }
    }
  }
}

</style>
