import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
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
      component: () => import(/* webpackChunkName: "intermediate" */ './views/Intermediate.vue'),
    },
    {
      path: '/article/:file',
      name: 'article',
      component: () => import(/* webpackChunkName: "article" */ './views/Article.vue'),
  },
  ],
});
