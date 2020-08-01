<template>
    <div class="article-grid-item">
      <img src="../../assets/images/1x/test-img001.png" />
      <div class="item-text">
        <p class="article-title">Article Title</p>
        <p class="article-description">Slightly longer article description</p>
      </div>
    </div>
</template>

<static-query>

</static-query>

<script>

export default {
  name: 'ArticleGridItem',
}
</script>

<style lang="scss">
  .article-grid-item {
    background: $white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow:
      0 1px 3px rgba(0,0,0,0.12),
      0 1px 2px rgba(0,0,0,0.24);
    img {
      width: 100%;
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
