import axios from "../../config_axios";

const API_URL = "http://localhost:3000/api/react/";

class ReactService {
  add(data) {
    return axios.post(API_URL, data).then(
      (response) => {
        return response.data;
      },
      (error) => {
        return error;
      }
    );
  }
  getReactsFromPublication(id) {
    return axios.get(API_URL + "getReactsFromPublication/" + id).then(
      (response) => {
        return response.data;
      },
      (error) => {
        return error;
      }
    );
  }
  deleteReact(data) {
    console.log(data);
    return axios.delete(API_URL, { data }).then(
      (response) => {
        return response.data;
      },
      (error) => {
        return error;
      }
    );
  }
}

export default new ReactService();
