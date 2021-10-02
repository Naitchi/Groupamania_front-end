import Vue from "vue";
import Vuex from "vuex";

import { auth } from "./auth.module";
import { post } from "./post.module";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    notifShow: false,
  },
  getters: {
    getNotifValue: (state) => {
      return state.notifShow;
    },
  },
  mutations: {
    showChange(state) {
      return (state.notifShow = !state.notifShow);
    },
  },
  actions: {},
  modules: {
    auth,
    post,
  },
});
export default store;
