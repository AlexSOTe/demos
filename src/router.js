import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/chinaflag',
      name: 'chinaflag',
      component: () => import('./views/demos/ChinaFlag.vue')
    }
  ]
});
router.beforeEach((to, from, next) => {
  Vue.prototype.$pageQuery = {};
  next();
});
export default router;
