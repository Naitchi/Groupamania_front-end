import http from "../http-common";

class UserService {
  getAll() {
    return http.get("/user/getAll");
  }

  get(id) {
    return http.get(`/user/${id}`);
  }

  create(data) {
    return http.post("/user/signup", data);
  }

  /*update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }*/

  delete(id) {
    return http.delete(`/user/${id}/deleteAccount`);
  }
}

export default new UserService();
