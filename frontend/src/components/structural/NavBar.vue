<template>
<nav> 
  <ul class="main-nav" v-bind:class="{ menuOpen: isMenuOpen }">
    <li
      v-for="section in navData"
      v-bind:key="section.id"
      >
      <div>
        <router-link :to="section.path">{{section.name}}</router-link>
      </div>
    </li>
  </ul>
</nav>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>

import ClickOutside from '~/utils/clickOutside.js';

const d = [
    {"id": "001", "name": "Home", "path": "/", "children": []},
    {"id": "002", "name": "Beginner", "path": "/getting-started/beginner", "children": []},
    {"id": "003", "name": "Intermediate", "path": "/getting-started/intermediate", "children": []},
    {"id": "004", "name": "Full Checklist", "path": "/full-checklist", "children": []},
    {"id": "005", "name": "More", "path": "/tools", "children": [
        {"id": "051", "name": "Hack Map", "path": "/tools/map", "children": []},
        {"id": "052", "name": "Have you been Hacked?", "path": "/have-i-been-hacked", "children": []}
    ]},
    {"id": "006", "name": "About", "path": "/about", "children": []}
]

export default {
  name: 'NavBar',
  data: () => {
        return {
        navData: d,
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
}
</script>

<style>

</style>
