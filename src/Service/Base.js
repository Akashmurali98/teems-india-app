import axios from "axios";

import { setLoader } from "../store/main/reducers";

class BaseApi {
  constructor() {
    const token = sessionStorage.getItem("token");
    this.requestConfig = {
      baseUrl: "/dev/api/",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${token}`,
      },
    };
  }

  request(method, endpoint, dispatch, data) {
    dispatch(setLoader(true));
    const { baseUrl, headers } = this.requestConfig;
    const url = `${baseUrl}${endpoint}`;
    console.log(data);
    return new Promise((resolve) => {
      axios({
        method: method,
        url: url,
        headers,
        data,
      })
        .then(
          function (response) {
            if (method == "delete") {
              resolve(data);
            } else {
              resolve(response?.data?.data);
              console.log(response.data.data);
            }
          },
          (error) => {
            console.log(error);
          }
        )
        .finally(() => {
          dispatch(setLoader(false));
        });
    });
  }

  get(endpoint, dispatch) {
    return this.request("get", endpoint, dispatch);
  }

  delete(endpoint, dispatch, id) {
    return this.request("delete", endpoint, dispatch, id);
  }
  patch(endpoint, dispatch, data) {
    return this.request("patch", endpoint, dispatch, data);
  }

  post(endpoint, dispatch, data) {
    return this.request("post", endpoint, dispatch, data);
  }
}

export default BaseApi;
