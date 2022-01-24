import axios from "../../config_axios";

const API_URL = "http://localhost:3000/api/comment/";

class CommentService {
  postComment(data) {
    return axios.post(API_URL, data).then(
      (response) => {
        return response.data;
      },
      (error) => {
        return error;
      }
    );
  }
  getCommentsFromAPost(id) {
    return axios.get(API_URL + id).then(
      (response) => {
        return response.data;
      },
      (error) => {
        return error;
      }
    );
  }
  delete(idComment) {
    return axios.delete(API_URL + idComment).then(
      (response) => {
        return response.data;
      },
      (error) => {
        return error;
      }
    );
  }
  modifyComment(data) {
    return axios.put(API_URL + "modifyComment", data).then(
      (response) => {
        return response.data;
      },
      (error) => {
        return error;
      }
    );
  }
}

export default new CommentService();
