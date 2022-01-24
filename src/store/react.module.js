import ReactService from "../services/react.service";

const initialState = { reacts: [] };

export const react = {
  namespaced: true,
  state: initialState,

  actions: {
    add({ commit }, data) {
      return ReactService.add(data).then(
        (react) => {
          commit("addAReact", react);
          return Promise.resolve(react);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    getReactsFromPublication({ commit }, id) {
      return ReactService.getReactsFromPublication(id).then(
        (reacts) => {
          commit("getReacts");
          return Promise.resolve(reacts);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    deleteReact({ commit }, data) {
      console.log(data);
      return ReactService.deleteReact(data).then(
        () => {
          commit("delete");
          return Promise.resolve(data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
  },

  mutations: {
    //Ajout d'une réaction
    addAReact(state, react) {
      console.log("Une réaction a été ajoutée :");
      console.log(react);
      state.reacts.push(react);
    },
    //Suppression d'une réaction dans la bdd
    delete() {
      console.log("suppression d'une réaction");
    },
    //les réactions on été récuépérés
    getReacts() {
      console.log("réactions récupérées ");
    },
  },
};
