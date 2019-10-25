import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './registerServiceWorker';
import Vant from 'vant';
import 'vant/lib/index.css';
import * as THREE from 'three';

Vue.config.productionTip = false;

Vue.use(Vant);
Vue.prototype.$3 = THREE;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
