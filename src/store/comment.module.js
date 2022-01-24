import CommentService from "../services/comment.service";

const initialState = { comments: [] };

export const comment = {
  namespaced: true,
  state: initialState,

  actions: {
    postComment({ commit }, data) {
      return CommentService.postComment(data).then(
        (comment) => {
          commit("postAComment", comment);
          return Promise.resolve(comment);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    getCommentsFromAPost({ commit }, id) {
      return CommentService.getCommentsFromAPost(id).then(
        (comments) => {
          commit("getComments");
          return Promise.resolve(comments);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    delete({ commit }, idComment) {
      return CommentService.delete(idComment).then(
        () => {
          commit("deleteComment", idComment);
          return Promise.resolve(idComment);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    modifyComment({ commit }, data) {
      return CommentService.modifyComment(data).then(
        () => {
          commit("modifyComment");
          return Promise.resolve();
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
  },

  mutations: {
    //Publication d'un Comment
    postAComment(state, comment) {
      console.log("Un commentaire a été publié :");
      console.log(comment);
      state.comments.push(comment);
    },
    //Suppression d'un Comment dans la bdd
    deleteComment(state, idComment) {
      state.comments = state.comments.filter(
        (comment) => comment.id_comment != idComment
      );
      console.log("suppression d'un comment");
    },
    //un Comment a été modifié dans la bdd
    modifyComment() {
      console.log("un Comment a bien été modifié");
    },
    //les comments on été récuépéré
    getComments() {
      console.log("commentaires récupéré ");
    },
  },
};
