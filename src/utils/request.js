import axios from 'axios';

const instance = axios.create({
  timeout: 5000,
});

// Add a request interceptor 全局请求拦截
instance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    // console.log('请求发送之前执行');
    config.headers = {
      authorization: 'bearer ' + localStorage.getItem('token'),
    };
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
// 全局相应拦截
instance.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status == 401) {
      window.location.href = '/#/login';
    }
    if (error.response.status == 404) {
      window.location.href = '/err.html';
    }
    return Promise.reject(error);
  }
);

export function get(url, config) {
  return instance.get(url, config);
}

export function post(url, data, config) {
  return instance.post(url, data, config);
}
