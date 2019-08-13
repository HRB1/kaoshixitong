import axios from "axios";
import { Message } from "element-ui";
const httpAxios = axios.create({
  timeout: 2000
});
//监听请求
httpAxios.interceptors.request.use(
  config => {
    return {
      ...config,
      ...config.headers,
      //讲用户标识传递
      headers: {
        authorization: window.sessionStorage.getItem("authorization")
      }
    };
  },
  error => {
    return Promise.reject(error);
  }
);
//监听响应
httpAxios.interceptors.response.use(
  res => {
    const { code, msg } = res.data;
    //获取响应结果
    if (code) {
      return res.data;
    }
    Message({
      dangerouslyUseHTMLString: true,
      message: msg,
      type: "error"
    });
    return Promise.reject(res.data);
  },
  error => {
    return Promise.reject(error);
  }
);

export { httpAxios as axios };
