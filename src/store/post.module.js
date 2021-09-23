import PostService from "../services/post.service";

let initialState = { posts: [] };

export const post = {
  namespaced: true,
  state: initialState,

  actions: {
    post({ commit }, formData) {
      console.log(formData);
      return PostService.post(formData).then(
        (formData) => {
          commit("addPost", formData);
          return Promise.resolve(formData);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    delete({ commit }, idPost) {
      return PostService.delete(idPost).then(
        (idPost) => {
          commit("deletePost", idPost);
          return Promise.resolve(idPost);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    addPost(state, post) {
      state.posts.push(post);
      console.log("Ajout d'un post :" + state.posts);
    },
    deletePost(state, idPost) {
      state.posts = state.posts.filter((post) => post.id_publication != idPost);
      console.log("suppression d'un post :" + state.posts);
    },
  },
};
