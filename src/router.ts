import Vue from 'vue';

import Router from 'vue-router';
import Home from './views/Home.vue';
import Intermediate from './views/Intermediate.vue';
import FullList from './views/FullList.vue';
import HaveIBeenHacked from './views/HaveIBeenHacked.vue';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(Loading);

Vue.use(Router);

const router = new Router({
  mode: 'history',
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
      path: '/full-checklist',
      name: 'full-list',
      component: FullList,
    },
    {
      path: '/have-i-been-hacked',
      name: 'have-i-been-hacked',
      component: HaveIBeenHacked,
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
  loading = (Vue as any).$loading.show();
  next();
});
router.afterEach((to, from) => {
  setTimeout(() => { loading.hide(); }, 500);
});

export default router;
