<template>

  <!-- Site Navigation Link Cointainer -->
  <nav>
    <ul class="main-nav" v-bind:class="{ menuOpen: isMenuOpen }">
      <li
        v-for="navItem in $static.allDdNavigationMenus.edges"
        v-bind:key="navItem.node.link.id"
      >
        <!-- Navigation Bar Link Item -->
        <router-link :to="navItem.node.link.url">
          {{navItem.node.link.display_name}}
        </router-link>
        
        <!-- Optional Drop-down Menu, Visible on Hover -->
        <ul v-if="navItem.node.children.length > 0">
          <li 
            v-for="subNavItem in navItem.node.children"
            v-bind:key="subNavItem.id"
          >
            {{subNavItem.display_name}}
          </li>
        </ul>
      </li>
    </ul>

  </nav>
</template>

<static-query>
{
  allDdNavigationMenus {
    edges {
      node {
        link {
          id
          display_name
          url
          description
        }
    		children {
      		id
          display_name
          url
        }
      }
    }
  }
}
</static-query>

<script>

import ClickOutside from '~/utils/clickOutside.js';

export default {
  name: 'NavBar',
  data: () => {
      return {
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
