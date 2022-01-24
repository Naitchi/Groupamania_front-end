import Vue from "vue";
import Vuex from "vuex";

import { auth } from "./auth.module";
import { post } from "./post.module";
import { user } from "./user.module";
import { comment } from "./comment.module";
import { react } from "./react.module";

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
    comment,
    react,
  },
});
export default store;
