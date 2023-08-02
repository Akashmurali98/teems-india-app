import BaseApi from "./Base";

class WorkFlowApi extends BaseApi {
  constructor(dispatch) {
    super();
    this.dispatch = dispatch;
  }

  createWorkFLow(dataa) {
    const data = {
      name: "Test PDFW",
      form_sections: [
        {
          name: "Basic",
          column_type: "2",
          fields: [
            {
              label: "Name",
              type: "TEXT",
            },
            {
              label: "State",
              type: "DROPDOWN",
              data_type_value: 1,
            },
          ],
        },
      ],
    };
    return this.post("workflow", this.dispatch, data);
  }
}

export default WorkFlowApi;
