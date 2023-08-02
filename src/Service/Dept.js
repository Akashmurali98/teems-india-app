import BaseApi from "./Base";

class DeptApi extends BaseApi {
  constructor(dispatch) {
    super();
    this.dispatch = dispatch;
  }
  createDept(data) {
    const modifiedData = { name: data.departments };
    return this.post("department", this.dispatch, modifiedData);
  }

  listDept(data) {
    return this.get("department", this.dispatch);
  }

  viewDept(selectedId) {
    return this.get(`department/${selectedId}`, this.dispatch);
  }

  deleteDept(selectedId) {
    return this.delete(`department/${selectedId}`, this.dispatch, selectedId);

  }
}

export default DeptApi;
