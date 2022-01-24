import AuthService from "../services/auth.service";

const user = localStorage.getItem("token");
const initialState = user
  ? { status: { loggedIn: true, admin: 0 }, user, userId: undefined }
  : { status: { loggedIn: false, admin: 0 }, user: null, userId: undefined };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        (user) => {
          commit("loginSuccess", user);
          return Promise.resolve(user);
        },
        (error) => {
          commit("loginFailure");
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit("logout");
    },
    me({ commit }) {
      return AuthService.me().then(
        (me) => {
          commit("commitMe", me);
          return Promise.resolve(me);
        },
        (error) => {
          commit("loginFailure");
          return Promise.reject(error);
        }
      );
    },
    register({ commit }, user) {
      return AuthService.register(user).then(
        (response) => {
          commit("registerSuccess");
          return Promise.resolve(response.data);
        },
        (error) => {
          commit("registerFailure");
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    commitMe(state, me) {
      console.log(me);
      state.userId = me.user_Id.userId;
      state.status.admin = me.admin[0].admin;
    },
    loginSuccess(state, user) {
      state.status.admin = user.admin;
      state.status.loggedIn = true;
      state.userId = user.userId;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.userId = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    },
  },
  getters: {
    getMe: (state) => {
      return state.status.admin;
    },
    getMyId: (state) => {
      return state.userId;
    },
  },
};
