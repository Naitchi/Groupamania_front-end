import PostService from "../services/post.service";

const initialState = { posts: [] };

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
    delete(idPost) {
      return PostService.delete(idPost).then(
        (idPost) => {
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
    },
  },
};
