import axios from "axios";
import store from "../store/index";

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
          localStorage.setItem("user", JSON.stringify(response.data.token));
          store.commit("saveUserId", response.data.userId);
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    console.log(JSON.stringify(user));
    console.log(user.nickname);
    return axios.post(API_URL + "signup", {
      nickname: user.nickname,
      email: user.email,
      password: user.password,
      phone: user.phone,
      birthday: user.birthday,
    });
  }
}

export default new AuthService();
