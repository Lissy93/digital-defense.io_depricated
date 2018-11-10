<template>
  <div class="page-intermediate">
    <h1>Intermediate</h1>

    <Checklist :theList="theList"/>
  
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Checklist } from 'vue-checklist';

@Component({
    components: {
        Checklist,
    },
    data: () => {
      return  {
        theList: [
            { name: 'Item One', description: 'this is the frst item in the list', checked: false },
            { name: 'Item Two', description: 'another check list item here', checked: false },
        ],
      };
    },
})
export default class Intermediate extends Vue {}


</script>
