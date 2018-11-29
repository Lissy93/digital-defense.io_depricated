<template>
  <div class="page-intermediate">
    <h1>Intermediate</h1>
    
      <Card>
        <vue-markdown class="markdown-container">
          {{ require('./../docs/intermediate-intro.md') }}
        </vue-markdown>
      </Card>

    <Checklist class="checklist" :theList="theList" title="Strong Password Checklist"/>
  
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Checklist } from 'vue-checklist';
import Card from '@/components/Card.vue';
import VueMarkdown from 'vue-markdown';
import * as listPasswords from './../data/intermediate-password-list.json';

@Component({
    components: {
        Checklist,
        Card,
        VueMarkdown,
    },
    data: () => {
      return  {
        theList: listPasswords.default,
      };
    },
})
export default class Intermediate extends Vue {}


</script>


<style lang="scss">

  @import './../styles/markdown-overrides.scss';


  .checklist{
    .checkbox_label, .header-item{
        font-family: 'Dosis', sans-serif;
    }
    .item-details{
        font-family: 'Raleway', sans-serif;
    }
  }
</style>
