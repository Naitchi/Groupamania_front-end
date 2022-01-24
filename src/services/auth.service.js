import axios from "../../config_axios";

const API_URL = "http://localhost:3000/api/user/";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "login", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
        }
        return response.data;
      });
  }

  me() {
    return axios.get(API_URL + "me").then((response) => {
      return response.data;
    });
  }

  logout() {
    localStorage.removeItem("token");
  }

  register(user) {
    return axios.post(API_URL + "signup", {
      nickname: user.nickname,
      email: user.email,
      password: user.password,
      phone: user.phone,
      birthday: user.birthday,
    });
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

export default new AuthService();
