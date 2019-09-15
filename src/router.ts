import Vue from 'vue';
import Router from 'vue-router';
import Explore from './views/Explore.vue';
import Routes from '@/enums/routes';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'explore',
    },
    {
      path: '/explore',
      name: Routes.explore,
      component: Explore,
    },
    {
      path: '/explore/:code',
      name: Routes.detail,
      component: () => import(/* webpackChunkName: "details" */ './views/Details.vue'),
    },
  ],
});
