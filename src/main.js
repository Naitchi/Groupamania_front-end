import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store.js";
import routes from "./routes.js";

const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
