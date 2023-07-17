import BaseApi from "./Base";

class RolesApi extends BaseApi {
  constructor(dispatch) {
    super();
    this.dispatch = dispatch;
  }

  listRole() {
    return this.get("role", this.dispatch);
  }

  createRole(data) {
    const modifiedData = { name: data.roles };
    return this.post("role", this.dispatch, modifiedData);
  }

  viewRole(selectedId) {
    return this.get(`role/${selectedId}`, this.dispatch);
  }

  deleteRole(selectedId) {
    return this.delete(`role/${selectedId}`, this.dispatch, selectedId);
  }
}

export default RolesApi;
