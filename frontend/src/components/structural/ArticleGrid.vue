<template>
    <section class="article-grid">
        <ArticleGridItem />
        <div class="article-item">
            Article
        </div>
        <div class="article-item">
            Article
        </div>
        <div class="article-item">
            Article
        </div>
        <div class="article-item">
            Article
        </div>
        <div class="article-item">
            Article
        </div>
    </section>
</template>

<static-query>

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
$item-min-width: 12rem;
.article-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax($item-min-width, 1fr));
    grid-auto-rows: 1fr;
    &::before {
        content: '';
        width: 0;
        padding-bottom: 100%;
        grid-row: 1 / 1;
        grid-column: 1 / 1;
    }

    

    .article-item {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);

        // &:first-child {
        //     grid-row: 1 / 1;
        //     grid-column: 1 / 1;
        // }
    }
}

</style>
