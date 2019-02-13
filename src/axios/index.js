/* jshint esversion: 6 */
import axios from "axios";

// const host = window.location.host
// axios 配置
axios.defaults.timeout = 30000;
// axios.defaults.baseURL = 'http://' + host
// axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.baseURL = "/datacenter-projectserver";
axios.defaults.headers.post["Content-Type"] = "application/json";
// 配置跨域请求允许
// axios.defaults.headers['Access-Control-Allow-Origin'] = process.env.BASE_API

// http request 拦截器
axios.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem("tokenKey")
      ? sessionStorage.getItem("tokenKey")
      : "";
    if (token) {
      // config.headers['X-YAuth-Token'] = token
      config.headers["Authorization"] = JSON.parse(token);
      console.log(token);
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// 返回状态判断
axios.interceptors.response.use(
  response => {
    if (response.data.resultCode === "9996") {
      // tokenKey 过期
      sessionStorage.clear("tokenKey");
      this.props.history.push("/");
    }
    return response;
  },
  error => {
    if (error) {
      console.log(111);
    }
    return error;
  }
);

export default axios;
