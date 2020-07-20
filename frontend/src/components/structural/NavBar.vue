<template>
  <header v-click-outside="closeAllDropdowns" class="dd-nav-bar">

    

    <!-- Burger menu for mobile-->
    <Burger class="bigmac" @onBurgerChange="onBurgerChange" :startIsMenuOpen="isMenuOpen"/>

    <!-- Main Logo and Title -->
    <router-link class="nav-title-wrapper" to="/">
      <img class="nav-logo" src="../../assets/icons/dd-logo.png" />
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
import Burger from '~/components/misc/Burger';

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
    components: {
        Burger,
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
    padding: 0.5em;
    background: $primary;
    list-style: none;

    @include phone-max {
      flex-direction: column;
    };

    a { // Remove hyperlink underline
      text-decoration: none;
    }

    /** Burger Menu Icon */
    .bigmac {
      position: absolute;
      left: 1rem;
      top: 1rem;
      @include phone-min {
        display: none; // Only visible on mobile
      }
    }


    /** Title */
    .nav-title-wrapper {
      display: flex;
      align-items: center;
      flex-grow: 1;
      h1.nav-title {
        margin: 0;
        font-size: 2.5rem;
        font-weight: normal;
        text-decoration: none;
        color: $accent1;
      }
      .nav-logo {
        width: 5rem;
        margin: 0 0.1rem;
        @include phone-max {
          display: none;
        }
      }
      @include tablet-max {
          justify-content: center;
          text-align: center;
        };
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

      @include phone-max {
        border: none;
        // display: none;
      }
    }

    /** Main Navigation Links, Within Header Bar */
    nav {
      margin: 0 auto;
      @include phone-max {
        width: 100%;
      }
      ul.main-nav {
        display: flex;
        flex-direction: row;
        list-style: none;
        padding: 0;

        @include phone-max {
          flex-direction: column;
          display: none; // On mobile, hide
        };

        &.menuOpen { // If menuOpen, then show
          display: flex;
        }

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
          @include phone-max {
            position: relative;
          };
        }

      }
    }
}

</style>
