<template>
    <div class="article-grid-item">
      <g-image
        :src="getImage(articleImgPath.url)"
        :style="`object-position: 0 ${calculateThumbnailPosition(scrollPosition)}%`"
      />
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
    scrollPosition: Number,
  },
   methods: { // TODO, use a global for the image paths
    getImage: (path: String) => 'http://localhost:1337' + path,
    calculateThumbnailPosition: (scrollPosition) => {
      // Uses scroll position, and page hiehgt to offset the item image,
      // In order to create a subtle parallax-like effect
      const pageHeight = document.body.scrollHeight;
      const percentage = scrollPosition / pageHeight * 100;
      return percentage;
    }
   },
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
      height: 120px;
      object-fit: cover;
    }
    .item-text {
      padding: 0.2rem;
      .article-title {
        font-size: $body-font-large;
        margin: 0.2rem;
      }
      .article-description {
        font-size: $body-font-small;
        margin: 0.2rem;
      }
    }
  }

</style>
