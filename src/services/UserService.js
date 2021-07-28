import http from "../http-common";

class UserService {
  getAll() {
    return http.get("/user/getAll");
  }

  get(id) {
    return http.get(`/user/${id}`);
  }

  /*update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }*/

  delete(id) {
    return http.delete(`/user/${id}/deleteAccount`);
  }
}

export default new UserService();
