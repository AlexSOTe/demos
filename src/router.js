import Vue from 'vue';
import Router from 'vue-router';
import store from './store/store';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: () => import('./views/Home.vue')
    },
    {
      path: '/chinaflag',
      name: 'chinaflag',
      meta: {
        title: '给头像添加国旗'
      },
      component: () => import('./views/demos/ChinaFlag.vue')
    },
    {
      path: '/cube',
      name: 'cube',
      meta: {
        title: '立方体'
      },
      component: () => import('./views/demos/CubeDemo.vue')
    },
    {
      path: '/threejs',
      name: 'threejs',
      meta: {
        title: 'ThreeJS'
      },
      component: () => import('./views/demos/ThreeJS.vue')
    },
    {
      path: '/bezier',
      name: 'bezier',
      meta: {
        title: '贝塞尔曲线'
      },
      component: () => import('./views/demos/Bezier.vue')
    },
    {
      path: '/music',
      name: 'music',
      meta: {
        title: '音乐文件'
      },
      component: () => import('./views/demos/Music.vue')
    }
  ]
});
router.beforeEach((to, from, next) => {
  Vue.prototype.$pageMeta = to.meta;
  document.title = to.meta.title;
  store.commit('SetNavTitle', to.meta.title);
  next();
});
export default router;
