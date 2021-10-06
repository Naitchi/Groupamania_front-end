import PostService from "../services/post.service";

const initialState = { posts: [] };

export const post = {
  namespaced: true,
  state: initialState,

  actions: {
    post({ commit }, formData) {
      return PostService.post(formData).then(
        (formData) => {
          commit("addPost", formData);
          this.dispatch("post/getPosts");
          return Promise.resolve(formData);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    getPosts({ commit }) {
      return PostService.getPosts().then(
        (posts) => {
          commit("addPosts", posts);
          return Promise.resolve(posts);
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
    addPost(post) {
      console.log("Ajout d'un post :");
      console.log(post);
    },
    deletePost(state, idPost) {
      state.posts = state.posts.filter((post) => post.id_publication != idPost);
      console.log("suppression d'un post :" + state.posts);
    },
    addPosts(state, posts) {
      state.posts = posts.publications;
      console.log("Récupération des posts dans le Store :");
      console.log(state.posts);
    },
  },
};
