import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store/index.js";
import routes from "./routes.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);

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
