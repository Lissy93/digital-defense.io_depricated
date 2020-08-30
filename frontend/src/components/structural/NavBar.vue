<template>
  <header v-click-outside="closeAllDropdowns" class="dd-nav-bar">

    <!-- Burger menu for mobile-->
    <Burger class="bigmac" @onBurgerChange="onBurgerChange" :startIsMenuOpen="isMenuOpen"/>

    <!-- Main Logo and Title -->
    <router-link class="nav-title-wrapper" to="/">
      <img
        class="nav-logo"
        src="../../assets/icons/dd-logo.png" 
        title="Digital Defense | Home"
        alt="Logo"
      />
      <h1 class="nav-title">
        {{$static.siteMeta.edges[0].node.title}}
      </h1>
    </router-link>

    <!-- Site Navigation Link Cointainer -->
    <nav>
      <ul class="main-nav" v-bind:class="{ menuOpen: isMenuOpen }">

        <li
          v-for="navItem in $static.navData.edges"
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
query {
  siteMeta: allDdSiteMetaData {
    edges {
      node {
        title,
      }
    }
  }
  navData: allDdNavigationMenus {
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
    position: relative;
    padding: 0.5em;
    background: $primary;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.35);
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
        display: none; // Make visible only on mobile
      }
    }

    /** Title + Logo */
    .nav-title-wrapper {
      display: flex;
      align-items: center;
      flex-grow: 1;
      @include tablet-max { // Center on medium/ small devices
        justify-content: center;
        text-align: center;
      };
      .nav-logo {
        width: 5rem;
        margin-right: 1rem;
        @include phone-max {
          display: none;
        }
        &:hover {
          opacity: 0.8;
        }
      }
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
      font-size: $body-font-medium;
      text-align: center;
      @include phone-max { // Mobile-only nav buttons
        border: none;
        border-bottom: 1px solid $accent1;
      }
      &.router-link-active:hover,
      &:hover,
      &.router-link-exact-active { // Hover + Active nav buttons
        background: $accent1;
        border: 1px solid $accent1;
        color: $primary;
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
        &.menuOpen {
          display: flex; // If menuOpen, then show
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
            max-height: 800px; // Show Sub-Nav
          }
          @include phone-max {
            position: relative; // On mobile sub-nav is full-width + solid
          };
          li a{
            text-align: left;
            border-color: $primary;
            margin: 0;
          }
        }

      }
    }
}

</style>
