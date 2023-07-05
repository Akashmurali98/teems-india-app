import DeptApi from "../../Service/Dept.js";
import { createDept, deleteDept, viewDept, listDept } from "./Reducers.js";

export const listdept = (data) => (dispatch) => {
  const deptApiObj = new DeptApi(dispatch);
  deptApiObj
    .listDept()
    .then((value) => {
      dispatch(listDept(value));
    })
    .catch((error) => {
      console.error(error);
    });
};

export const createdept = (data) => (dispatch) => {
  const rolesApiObj = new DeptApi(dispatch);
  rolesApiObj.createDept(data).then((value) => {
    dispatch(createDept(value));
  });
};

export const deletedept = (data) => (dispatch) => {
  const deptApiObj = new DeptApi(dispatch);
  deptApiObj.deleteDept(data).then((value) => {
    dispatch(deleteDept(value));
  });
};

export const viewdept = (data) => (dispatch) => {
  const deptApiObj = new DeptApi(dispatch);
  deptApiObj
    .viewDept(data)
    .then((value) => {
      dispatch(viewDept(value));
    })
    .catch((error) => {
      console.error(error);
    });
};
