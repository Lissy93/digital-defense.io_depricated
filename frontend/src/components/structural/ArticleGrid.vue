<template>
    <section class="article-grid">
        <ArticleGridItem
            class="article-item"
            :articleTitle="articleItem.node.title"
            :articleDescription="articleItem.node.description"
            :articleImgPath="articleItem.node.image"
            articleClickUrl=""
            :scrollPosition="scrollPosition"
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
        description,
        image {
          url(width: 100, height:200)
        }
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
  data: () => ({
    scrollPosition: 0,
  }),
  methods: { 
    scroll () {
      window.onscroll = () => {
        this.scrollPosition = document.documentElement.scrollTop;
      }
    },
  },
  mounted() {
    this.scroll();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scroll);
  }
}
</script>

<style lang="scss">
$item-min-width: 18rem;
$item-min-height: 12rem;
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
