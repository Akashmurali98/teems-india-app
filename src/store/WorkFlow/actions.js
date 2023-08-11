import WorkFlowApi from "../../Service/Workflow";

export const createWorkFlow = (data) => (dispatch) => {
  const workFlow = new WorkFlowApi(dispatch);
  return new Promise((resolve) => {
    workFlow
      .createWorkFLow(data)
      .then((value) => {
        resolve(value);
        console.log(value)
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

export const listWorkFLow = () => (dispatch) => {
  const workFlow = new WorkFlowApi(dispatch);
  return new Promise((resolve) => {
    workFlow
      .listWorkFLow()
      .then((value) => {
        resolve(value);
        console.log(value)
      })
      .catch((error) => {
        console.error(error);
      });
  }); 
}


export const editWorkFLow = (selectedId, finalData) => (dispatch) => {
  const workFlow = new WorkFlowApi(dispatch);
  return new Promise((resolve) => {
    workFlow
      .editWorkFlow(selectedId, finalData)
      .then((value) => {
        resolve(value);
        console.log(value)
      })
      .catch((error) => {
        console.error(error);
      });
  }); 
}

export const selectWorkFLow = (selectedId) => (dispatch) => {
  const workFlow = new WorkFlowApi(dispatch);
  return new Promise((resolve) => {
    workFlow
      .selectWorkFlow(selectedId)
      .then((value) => {
        resolve(value);
      })
      .catch((error) => {
        console.error(error);
      });
  }); 
}
