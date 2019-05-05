<template>
  <div class="main-page-links">
    
    <TileSection
      v-for="(section, sectionIndex) in this.sections"
      :key="sectionIndex" 
      :tileSectionTitle="section.sectionTitle" 
      :tileSectionSubTitle="section.sectionSubTitle"
      :styles="myStyle"
      :tiles = "section.tiles"
      theme="soft"
      class="tile-section"
    />

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { TileSection } from 'vue-link-grid';

import * as mainPageLinks from './../data/main-page-links-content.json';


@Component({
  data: () => {
      return  {
        myStyle: {},
        sections: mainPageLinks.default.sections,
      };
    },
  components: {
    TileSection,
  },
})
export default class MainPageLinks extends Vue {}
</script>

<style lang="scss">
    .main-page-links{
        position: relative;
        z-index: 5;
        border: 1em solid transparent;

        .tile {
          cursor: pointer;
          width: 400px;
          flex-basis: unset !important;
          flex-grow: unset !important;
        }
        .tile-wraper {
          flex-wrap: wrap !important;
        }
        .tile-section, .tile-section-header {
          background: none !important;
        }
    }
    
</style>
