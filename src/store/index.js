import Vue from "vue";
import Vuex from "vuex";

import { auth } from "./auth.module";

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
  },
});
export default store;
