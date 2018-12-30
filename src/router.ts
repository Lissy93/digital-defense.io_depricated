import Vue from 'vue';

import Router from 'vue-router';
import Home from './views/Home.vue';
import Intermediate from './views/Intermediate.vue';
import Advanced from './views/Advanced.vue';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(Loading);

// tslint:disable:no-var-requires
const IsLoadingStore = require('./stores/IsLoadingStore.js');
// tslint:enable:no-var-requires


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/getting-started/intermediate',
      name: 'intermediate',
      component: Intermediate,
    },
    {
      path: '/getting-started/advanced',
      name: 'advanced',
      component: Advanced,
    },
    {
      path: '/article/:file',
      name: 'article',
      component: () => import(/* webpackChunkName: "article" */ './views/Article.vue'),
  },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

/**
 * Show and hide the loader
 */
let loading: any;

router.beforeEach((to, from, next) => {
  IsLoadingStore.default.commit('startLoading');
  loading = (Vue as any).$loading.show();
  next();
});
router.afterEach((to, from) => {
  IsLoadingStore.default.commit('finishLoading');
  setTimeout(() => { loading.hide(); }, 500);
});

export default router;
