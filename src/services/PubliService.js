import http from "../../http-common";

class PubliService {
  getAll() {
    return http.get("/publication");
  }

  get(id) {
    return http.get(`/publication/${id}`);
  }

  create(data) {
    return http.post("publication", data);
  }

  delete(id) {
    return http.delete(`publication/${id}/delete`);
  }
}
export default new PubliService();
