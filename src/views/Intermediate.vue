<template>
  <div class="page-intermediate">
    <h1>Intermediate</h1>
    
      <Card class="view-card">
        <MdViewer>{{ require('./../docs/intermediate-intro.md') }}</MdViewer>
      </Card>

    <Checklist class="checklist" :theList="theList" title="Strong Password Checklist"/>
  
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Checklist } from 'vue-checklist';
import Card from '@/components/Card.vue';
import MdViewer from '@/components/MdViewer.vue';
import * as listPasswords from './../data/intermediate-password-list.json';

@Component({
    components: {
        Checklist,
        Card,
        MdViewer,
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

  .view-card{
    margin: 2em;
  }

  .checklist{
    .checkbox_label, .header-item{
        font-family: 'Dosis', sans-serif;
    }
    .item-details{
        font-family: 'Raleway', sans-serif;
    }
  }
</style>
