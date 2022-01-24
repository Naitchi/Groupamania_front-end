import axios from "../../config_axios";

const API_URL = "http://localhost:3000/api/user/";

class UserService {
  setUser(user) {
    return axios.get(API_URL + user).then((response) => {
      return response.data.user[0];
    });
  }

  modifyUser(data) {
    return axios.put(API_URL + "modifyUser", data).then(
      (response) => {
        return response.data;
      },
      (error) => {
        return error;
      }
    );
  }

  modifyPassword(data) {
    return axios.put(API_URL + "modifyPassword", data).then(
      (response) => {
        return response.data;
      },
      (error) => {
        return error;
      }
    );
  }

  modifyPP(data) {
    return axios.put(API_URL + "modifyPP", data).then(
      (response) => {
        return response.data;
      },
      (error) => {
        return error;
      }
    );
  }

  deleteUser(id) {
    return axios.delete(API_URL + id).then(
      (response) => {
        return response.data;
      },
      (error) => {
        return error;
      }
    );
  }
}
export default new UserService();
