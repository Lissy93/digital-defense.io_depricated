<template>
  <div class="main-page-links">
    <h2>Site Content</h2>
    <div class="link-section">
      <h3>Categories</h3>
      <ul class="link-list">
        <li>
          <AnimatedButton>Passwords</AnimatedButton>
        </li>
        <li>
          <AnimatedButton>2 FA</AnimatedButton>
        </li>
        <li>
          <AnimatedButton>Browser & Search</AnimatedButton>
        </li>
        <li>
          <AnimatedButton>VPN</AnimatedButton>
        </li>
        <li>
          <AnimatedButton>Emails</AnimatedButton>
        </li>
        <li>
          <AnimatedButton>Social Media</AnimatedButton>
        </li>
        <li>
          <AnimatedButton>Devices</AnimatedButton>
        </li>
        <li>
          <AnimatedButton>SMS and Calls</AnimatedButton>
        </li>
        <li>
          <AnimatedButton>Router</AnimatedButton>
        </li>
        <li>
          <AnimatedButton>Operating System</AnimatedButton>
        </li>   
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { TileSection } from 'vue-link-grid';
import AnimatedButton from '@/components/AnimatedButton.vue';

import * as mainPageLinks from './../data/main-page-links-content.json';

@Component({
  data: () => {
      return  {
        myStyle: {},
        sections: mainPageLinks.default.sections,
      };
    },
  components: {
    AnimatedButton,
    TileSection,
  },
})

export default class MainPageLinks extends Vue {}
</script>

<style lang="scss">
    .main-page-links{
        color: #3979fa;
        padding: 1rem;

        h3 {
          padding-left: 2.5rem;
        }
        ul.link-list {
          list-style: none;
          li { // Color overides for cool animated button
            $col1: #3979fa;
            $col2: #031636;
            .button {
                // Colors
                color: $col1;
                background: $col1;
                border: 2px solid $col1;
                &:before { background: $col2; }
                &:hover, &:focus, &:active { color: $col2; }
                
                // Display Styles
                width: 20rem;
            }

          }
        }

        .tile {
          cursor: pointer;
          width: 400px;
          flex-basis: unset !important;
          flex-grow: unset !important;
          .tile-texts .tile-description {
            text-align: left !important;
          }
        }
        .tile-wraper {
          flex-wrap: wrap !important;
        }
        .tile-section, .tile-section-header {
          background: none !important;
        }
    }
    
</style>
