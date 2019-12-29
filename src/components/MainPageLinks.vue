<template>
  <div class="main-page-links">
    <h2>Site Content</h2>
    <div class="link-section-wrapper">
      <section v-for="section in sections" :key="section.id" class="link-section">
        <h3>{{section.title}}</h3>
        <ul class="link-list">
          <li v-for="link in section.links" :key="link.id">
            <span>{{ link.name }}</span>
          </li>
        </ul>
      </section>
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

      h2 {
        opacity: 0.5;
        margin: 0;
        font-size: 2.75rem;
      }

      section.link-section {
        display: inline-block;
        vertical-align: top;
        width: 15rem;
        margin: 0.5rem;
        h3 {
          text-decoration: underline;
          margin: 0 0 0.2rem 0;
          font-size: 1.2rem;
        }
      }
    }
  ul.link-list {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0;
    li {
      span {
        font-size: 1rem;
        border-radius: 8px;
        line-height: 1.6rem;
        padding: 0.2rem;
        cursor: pointer;
        &:hover {
          background: #09295e;
        }
        &:focus {
          border: 2px solid #3979fa;
          background: #09295e;
        }
      }
    }
  }
</style>
