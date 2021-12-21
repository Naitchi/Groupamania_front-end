import UserService from "../services/user.service";

const initialState = { userProfile: null };

export const user = {
  namespaced: true,
  state: initialState,

  actions: {
    setUser({ commit }, userId) {
      return UserService.setUser(userId).then(
        (user) => {
          commit("commitUser", user);
          return Promise.resolve(user);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    modifyUser({ commit }, data) {
      return UserService.modifyUser(data).then(
        (response) => {
          commit("commitmodifyUser", response);
          return Promise.resolve(user);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    modifyPassword({ commit }, data) {
      return UserService.modifyPassword(data).then(
        (response) => {
          commit("commitNewMdp", response);
          return Promise.resolve(response);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    modifyPP({ commit }, data) {
      return UserService.modifyPP(data).then(
        (response) => {
          commit("commitNewPP", response);
          return Promise.resolve(response);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    commitUser(state, user) {
      state.userProfile = user;
      console.log("récuperation d'un user :");
      console.log(user);
    },
    commitNewMdp(response) {
      console.log("Mot de passe modifié !");
      console.log(response);
    },
    commitmodifyUser(response) {
      console.log(response);
    },

    commitNewPP(state, response) {
      console.log(response.message);
      state.userProfile.profilepicture = response.image;
    },
  },
  getters: {
    getUser: (state) => {
      return state.userProfile;
    },
  },
};
