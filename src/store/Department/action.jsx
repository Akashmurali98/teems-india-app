import DeptApi from "../../Service/Dept.jsx";
import { createDept, deleteDept, viewDept, listDept } from "./Reducers.jsx";

export const listdept = (data) => (dispatch) => {
  const deptApiObj = new DeptApi();
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
  console.log("create role");
  console.log(data, "dataaaaa");
  const rolesApiObj = new DeptApi();
  rolesApiObj.createDept(data).then((value) => {
    console.log(value);
    dispatch(createDept(value));
  });
};

export const deletedept = (data) => (dispatch) => {
  console.log("create role");
  console.log(data, "dataaaaa");
  const deptApiObj = new DeptApi();
  deptApiObj.deleteDept(data).then((value) => {
    console.log("deletedept", value);
    dispatch(deleteDept(value));
  });
};

export const viewdept = (data) => (dispatch) => {
  console.log(`${data} Akash`);
  const deptApiObj = new DeptApi();
  deptApiObj
    .viewDept(data)
    .then((value) => {
      dispatch(viewDept(value));
    })
    .catch((error) => {
      console.error(error);
    });
};
