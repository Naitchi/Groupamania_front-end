import Vue from "vue";
import Vuex from "vuex";

import { auth } from "./auth.module";
import { post } from "./post.module";
import { user } from "./user.module";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    notifShow: false,
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
    user,
  },
});
export default store;
