<template>
  <div class="hello">

    <div v-if="!articleFound || articleContent===''">
      ARTICLE NOT FOUND
    </div>
    
    <h1>Articles Page is Coming Soon...</h1>
    <h2>{{ $route.params.file }}</h2>

    <vue-markdown :source="articleContent" />

  </div>
</template>



<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

import VueMarkdown from 'vue-markdown';

import * as articleListings from './../data/article-listings.json';


@Component({
  data: () => {
      return  {};
    },
  components: {
    VueMarkdown,
  },
  computed: {

    requestedFile() {
      return this.$route.params.file;
    },

    articleFound() {
      let found = false;
      articleListings.default.forEach((article: any ) => {
        if (article.file === this.requestedFile) {
          found = true;
        }
      });
      return found;
    },

    articleContent() {
      if (this.articleFound) {
        try {
          return require(`./../docs/${this.requestedFile}.md`);
        }
        catch (e) {
          return '';
        }
      }
    },

  },
   watch: {
    '$route.params.file': function(urlFile) {
      // todo
    },
  },
})
export default class Home extends Vue {}

</script>
