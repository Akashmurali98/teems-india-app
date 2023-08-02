import WorkFlowApi from "../../Service/Workflow";

export const createWorkFlow = (data) => (dispatch) => {
  const workFlow = new WorkFlowApi(dispatch);
  return new Promise((resolve) => {
    workFlow
      .createWorkFLow(data)
      .then((value) => {
        resolve(value);
        console.log("value")
      })
      .catch((error) => {
        console.error(error);
      });
  });
};
