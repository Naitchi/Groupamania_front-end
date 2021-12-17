import PostService from "../services/post.service";

const initialState = { post: null, posts: [], postsFromUser: [] };

export const post = {
  namespaced: true,
  state: initialState,

  actions: {
    post({ commit }, formData) {
      return PostService.post(formData).then(
        (formData) => {
          commit("postAPost", formData);
          this.dispatch("post/getPosts");
          return Promise.resolve(formData);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    getPost({ commit }, id) {
      return PostService.getPost(id).then(
        (post) => {
          commit("addPost", post);
          return Promise.resolve(post);
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
    getPostsFromUser({ commit }, userId) {
      return PostService.getPosts(userId).then(
        (posts) => {
          commit("addpostsFromUser", posts);
          return Promise.resolve(posts);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    delete({ commit }, idPost) {
      return PostService.delete(idPost).then(
        () => {
          commit("deletePost", idPost);
          return Promise.resolve(idPost);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    modifyPost({ commit }, formData) {
      return PostService.modifyPost(formData).then(
        () => {
          commit("modifyPost");
          return Promise.resolve();
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    modifyPostContent({ commit }, data) {
      return PostService.modifyPostContent(data).then(
        () => {
          commit("modifyPost");
          return Promise.resolve();
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
  },

  mutations: {
    //Publication d'un post
    postAPost(post) {
      console.log("Un post a été publié :");
      console.log(post);
    },
    //Ajout des posts d'un utilisateur dans le store
    addpostsFromUser(state, posts) {
      state.postsFromUser = posts.publications;
      console.log("Récupération des posts d'un utilisateur dans le Store :");
      console.log(state.postsFromUser);
    },
    //Suppression d'un post dans la bdd
    deletePost(state, idPost) {
      state.posts = state.posts.filter((post) => post.id_publication != idPost);
      console.log("suppression d'un post :");
    },
    //Ajout de posts dans le store
    addPosts(state, posts) {
      state.posts = posts.publications;
      console.log("Récupération des posts dans le Store :");
      console.log(state.posts);
    },
    //ajout d'un post dans le store
    addPost(state, post) {
      state.post = post.publication;
      console.log("Récupération des posts dans le Store :");
      console.log(state.posts);
    },
    //un post a été modifié dans la bdd
    modifyPost() {
      console.log("un post a bien été modifié");
    },
  },

  getters: {
    getterPost: (state) => {
      console.log(state.post);
      return state.post;
    },
  },
};
