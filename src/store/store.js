import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    app: {
      navTitle: '首页'
    },
    three: {
      animationHandle: 0
    }
  },
  mutations: {
    SetNavTitle(state, data) {
      state.app.navTitle = data.pageTitle;
    },
    SetAnimation(state, data) {
      state.three.animationHandle = data;
    },
    CancelAnimation(state, data) {
      cancelAnimationFrame(state.three.animationHandle);
    }
  },
  actions: {
    SetNavTitle(context) {
      context.commit('SetNavTitle');
    },
    SetAnimation(context) {
      context.commit('SetAnimation');
    },
    CancelAnimation(context) {
      context.commit('CancelAnimation');
    }
  },
  getters: {
    app(state) {
      return state.app;
    },
    three(state) {
      return state.three;
    }
  }
});
