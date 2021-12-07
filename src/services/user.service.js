import axios from "../../config_axios";

const API_URL = "http://localhost:3000/api/user/";

class UserService {
  setUser(user) {
    return axios.get(API_URL + user).then((response) => {
      return response.data.user[0];
    });
  }

  modifyUser(formData, user_id) {
    return axios.put(API_URL + user_id, formData).then(
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
}
export default new UserService();
