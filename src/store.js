import Vue from "vue";
import Vuex from "vuex";
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
});
export default store;
