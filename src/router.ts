import Vue from 'vue';
import Router from 'vue-router';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Home from './views/Home.vue';
import Intermediate from './views/Intermediate.vue';
import FullList from './views/FullList.vue';
import HaveIBeenHacked from './views/HaveIBeenHacked.vue';

Vue.use(Loading);
Vue.use(Router);

/**
 * This file manages which components are rendered for a given path
 * All application routes are defined below
 */
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/ultimate-checklist',
      name: 'ultimate-list',
      component: FullList,
    },
    {
      path: '/the-ultimate-personal-cyber-security-checklist',
      redirect: { name: 'ultimate-list' }},
    {
      path: '/list', redirect: { name: 'ultimate-list' },
    },
    {
      path: '/beginners-checklist',
      name: 'beginners',
      component: Intermediate,
    },
    {
      path: '/intermediate-checklist',
      name: 'intermediate',
      component: Intermediate,
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
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
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
