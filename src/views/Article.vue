<template>
  <div class="article">

    <div v-if="!articleFound || articleContent===''">
      ARTICLE NOT FOUND
    </div>

    <Card class="article-card">
      <vue-markdown>{{ articleContent }}</vue-markdown>
    </Card>

    <h2>{{ $route.params.file }}</h2>

    

  </div>
</template>



<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

import VueMarkdown from 'vue-markdown';

import * as articleListings from './../data/article-listings.json';

import Card from '@/components/Card.vue';


@Component({
  data: () => {
      return  {};
    },
  components: {
    VueMarkdown,
    Card,
  },
  computed: {

    requestedFile() {
      return this.$route.params.file;
    },

    articleFound() {
      let found = false;
      articleListings.default.forEach((article: any ) => {
        if (article.file === (this as any).requestedFile) {
          found = true;
        }
      });
      return found;
    },

    articleContent() {
      if ((this as any).articleFound) {
        try {
          return require(`./../docs/${(this as any).requestedFile}.md`);
        } catch (e) {
          return '';
        }
      } else {
        return '';
      }
    },

  },
   watch: {
    '$route.params.file': (urlFile) => {
      // todo
    },
  },
})
export default class Home extends Vue {}

</script>


<style lang="scss" >

  .article{
    margin: 2em auto;
    max-width: 800px;
  }
  .article-card{
    margin: 2em;
    padding: 2em;

    .check-item{
      background: red;
    }

    h2{
      text-align: left;
      font-size: 1.5rem;
      font-weight: bold;
    }

    
    ul {
      margin: 0;
      list-style: none;
      float: left;
      text-align: left;
    }

    strong{
      display: inline;
      &::after {
        content: "";
        display: block;
      }
    }
  }

</style>
