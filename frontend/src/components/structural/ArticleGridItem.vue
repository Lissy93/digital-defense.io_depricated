<template>
    <div class="article-grid-item">
      <g-image :src="getImage(articleImgPath.url)" width="500"/>
      <div class="item-text">
        <p class="article-title">{{articleTitle}}</p>
        <p class="article-description">{{articleDescription}}</p>
      </div>
    </div>
</template>

<static-query>

</static-query>

<script lang="ts">

interface Data {
  title: string;
  description: string;
  img_path: string;
}

export default {
  name: 'ArticleGridItem',
  props: {
    articleTitle: String,
    articleDescription: String,
    articleImgPath: Object,
    articleClickUrl: String,
  },
   methods: {
    getImage: (path: String) => 'http://localhost:1337' + path
  }
}
</script>

<style lang="scss">
  .article-grid-item {
    min-height: 150px;
    background: $white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow:
      0 1px 3px rgba(0,0,0,0.12),
      0 1px 2px rgba(0,0,0,0.24);
    img {
      width: 100%;
      height: 80px;
      object-fit: cover;
    }
    .item-text {
      padding: 0.2rem;
      .article-title {
        font-size: 1.4rem;
      }
      .article-description {
        font-size: 0.8rem;
      }
    }
  }

</style>
