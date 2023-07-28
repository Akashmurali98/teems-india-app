import BaseApi from "./Base";

class UsersApi extends BaseApi {
  constructor(dispatch) {
    super();
    this.dispatch = dispatch;
  }
  createUsers(data) {
    const updatedData = {
      ...data,
      roles: [parseInt(data.roles)],
      departments: [parseInt(data.departments)],
    };
    return this.post("user", this.dispatch, updatedData);
  }

  listUsers() {
    return this.get("user", this.dispatch);
  }

  deleteUser(selectedId) {
    return this.delete(`user/${selectedId}`, this.dispatch, selectedId);
  }
  editUsers(data) {
    const updatedData = {
      ...data,
      roles: [parseInt(data.roles)],
      departments: [parseInt(data.departments)],
      id: parseInt(data.id),
    };

    return this.patch(`user/${updatedData.id}`, this.dispatch, updatedData);

  }

  viewUsers(selectedId) {
    return this.get(`user/${selectedId}`, this.dispatch);
  }
}

export default UsersApi;
