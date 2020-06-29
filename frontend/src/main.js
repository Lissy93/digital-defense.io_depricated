// Main entry point into application

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Sets default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
