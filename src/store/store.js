import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    app: {
      navTitle: '首页',
    }
  },
  mutations: {
    SetNavTitle(state, data) {
      state.app.navTitle = data.pageTitle;
    },
  },
  actions: {
    SetNavTitle(context) {
      context.commit('SetNavTitle');
    },
  },
  getters: {
    app(state) {
      return state.app;
    }
  }
});
