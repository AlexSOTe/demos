import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navTitle: '首页'
  },
  mutations: {
    SetNavTitle(state, data) {
      state.navTitle = data.pageTitle;
    }
  },
  actions: {
    SetNavTitle(context) {
      context.commit('SetNavTitle');
    }
  }
});
