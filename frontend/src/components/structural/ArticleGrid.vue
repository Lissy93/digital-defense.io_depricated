<template>
    <section class="article-grid">
        <ArticleGridItem
            class="article-item"
            v-for="articleItem in $static.allDdArticleGrid.edges"
            v-bind:key="articleItem.node.order"
        />
    </section>
</template>

<static-query>
{
  allDdArticleGrid {
    edges {
      node {
        order,
        title,
        description
      }
    }
  }
}
</static-query>

<script>

import ArticleGridItem from '~/components/structural/ArticleGridItem';


export default {
  name: 'ArticleGrid',
  components: {
      ArticleGridItem,
  },
}
</script>

<style lang="scss">
$item-min-width: 16rem;
$item-min-height: 8rem;
.article-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax($item-min-width, 1fr));
    grid-template-rows: repeat(auto-fill, minmax($item-min-height, 100%));
    .article-item {   
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        margin: 0.5rem;
        &:first-child {
            grid-row: 1 / 1;
            grid-column: 1 / 1;
        }
    }
}

</style>
