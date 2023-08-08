import BaseApi from "./Base";

class WorkFlowApi extends BaseApi {
  constructor(dispatch) {
    super();
    this.dispatch = dispatch;
  }

  createWorkFLow(data) {
    return this.post("workflow", this.dispatch, data);
  }

  listWorkFLow() {
    return this.get("workflow?view=All", this.dispatch);
  }
}

export default WorkFlowApi;
