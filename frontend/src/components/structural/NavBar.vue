<template>
  <header v-click-outside="closeAllDropdowns" class="dd-nav-bar">

    <!-- Burger menu for mobile-->
    <!-- <Burger class="bigmac" @onBurgerChange="onBurgerChange" :startIsMenuOpen="isMenuOpen"/> -->

    <!-- Main Logo and Title -->
    <router-link to="/">
      <h1 class="nav-title">
          <!-- <img src="../../public/img/hero-scaled.png" alt="" v-click-outside="closeAllDropdowns"> -->
          Digital Defence
      </h1>
    </router-link>

    <!-- Site Navigation Link Cointainer -->
    <nav>
      <ul class="main-nav" v-bind:class="{ menuOpen: isMenuOpen }">

        <li
          v-for="navItem in $static.allDdNavigationMenus.edges"
          v-bind:key="navItem.node.link.id"
          @mouseover="visibleDropdown = navItem.node.link.id"
        >
          <!-- Navigation Bar Link Item -->
          <router-link :to="navItem.node.link.url">
            {{navItem.node.link.display_name}}
          </router-link>
          
          <!-- Optional Drop-down Menu, Visible on Hover -->
          <ul
            v-if="navItem.node.children.length > 0"
            v-bind:class="{ open: visibleDropdown == navItem.node.link.id }"
            @mouseleave="closeAllDropdowns"
            class="sub-nav"
          >
            <li 
              v-for="subNavItem in navItem.node.children"
              v-bind:key="subNavItem.id"
            >
              <router-link :to="subNavItem.url">
                {{subNavItem.display_name}}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
      
    </nav>

  </header>
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

<style lang="scss">

header.dd-nav-bar {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 1em;
    background: $primary;
    list-style: none;

    a {
      text-decoration: none;
    }

    /** Title */
    h1.nav-title {
      margin: 0;
      font-size: 2.5rem;
      font-weight: normal;
      text-decoration: none;
      color: $accent1;
    }

    /** Square Button used for Nav Bar Links */
    ul.main-nav li a, ul.sub-nav li a {
      display: block;
      padding: 0.3em 0.6em;
      margin: 0 0.5rem;
      min-width: 80px;
      border: 1px solid $accent1;
      color: $accent1;
      line-height: 2;
      text-decoration: none;
      font-size: 1em;
      text-align: center;
      
      &.router-link-exact-active {
        border: 1px solid $accent1;
      }
      
      &.router-link-active:hover, &:hover, &.router-link-exact-active {
        background: $accent1;
        border: 1px solid $accent1;
        color: $primary;
      }
    }

    /** Main Navigation Links, Within Header Bar */
    nav {
      ul.main-nav {
        display: flex;
        flex-direction: row;
        list-style: none;
        padding: 0;



        /** Sub-Nav */
        li ul.sub-nav {
          position: absolute;
          background: $primary;
          padding: 0;
          list-style: none;
          transition: height,.2s linear;
          overflow: hidden;
          max-height: 0; // Hide Sub-Nav
          &.open {
            max-height: 500px; // Show Sub-Nav
          }
          a {
            text-align: left;
            border: none;
            margin: 0;
          }
        }

      }
    }
}

</style>
