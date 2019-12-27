<template>
    <header v-click-outside="closeAllDropdowns">

      <!-- Burger menu for mobile-->
      <Burger class="bigmac" @onBurgerChange="onBurgerChange" :startIsMenuOpen="isMenuOpen"/>

      <!-- Main Logo and Title -->
      <h1 class="logo">
          <router-link to="/">
            <!-- <img src="../../public/img/hero-scaled.png" alt="" v-click-outside="closeAllDropdowns"> -->
            Digital Defence
          </router-link>
        </h1>

        <!-- Main Navigation -->
        <nav> 
          <ul class="main-nav" v-bind:class="{ menuOpen: isMenuOpen }">
            <li
              v-for="section in navData"
              v-bind:key="section.id"
              v-bind:class="{ hide: !section.showInNav }"
              @mouseover="visibleDropdown = section.id"
              >
              <div>
                <router-link :to="section.title">{{section.title}}</router-link>
              </div>
              <ul class="sub-nav" v-bind:class="{ open: visibleDropdown == section.id }"  @mouseleave="closeAllDropdowns">
                <li v-for="link in section.links" v-bind:key="link.name">
                  <router-link :to="link.path">{{link.name}}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

    </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import NavBarItems from './../models/NavBarItems';
import Burger from './Burger.vue';
import * as NavData from './../data/main-page-links-content.json';

// tslint:disable:no-var-requires // Will I go to hell for this?
const ClickOutside = require('./../directives/ClickOutside.js');
const navData = require('./../data/nav-bar-content.json');
// tslint:enable:no-var-requires // Probably, but it was worth it.

@Component({
    data: () => {
        return {
        navBarItems: (new NavBarItems()).makeTheFuckingNavbar(navData),
        navData: NavData.default.sections,
        visibleDropdown: '',
        isMenuOpen: false, // start closed
        };
    },
    methods: {
        closeAllDropdowns() {
          this.$data.visibleDropdown = '';
        },
        onBurgerChange(openOrClose) {
          this.$data.isMenuOpen = openOrClose;
        },
    },
    directives: {
        ClickOutside,
    },
    components: {
        Burger,
    },
})
export default class Header extends Vue {}
</script>

<style lang="sass">
  @import './../styles/navbar-styles.scss';
  .hide{ display: none; }
</style>

