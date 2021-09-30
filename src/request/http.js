/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import { Notify } from 'vant';
import router from '../router/index'
// 环境的切换
axios.defaults.baseURL = process.env.VUE_APP_BASE_API;

// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json';


// 请求拦截器
axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.error(error);
    })
// 响应拦截器
axios.interceptors.response.use(
    response => {
        // console.log("response",response)
        const status = response.data.code
        if(status === 200){
            return Promise.resolve(response);
        }else if(status === 401||status === 403){
            Notify({ type: 'primary', message:  response.data.msg});
            // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
            router.replace({
                path: '/login'
            });
        }else{
            Notify({ type: 'primary', message:  response.data.msg});
        }
    },
    // 服务器状态码不是200的情况    
    error => {
        console.log("error",error)
    }
);
/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
                params
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
    // console.log(params)
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

/** 
 * put方法，对应put请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function put(url, params) {
    // console.log(params)
    return new Promise((resolve, reject) => {
        axios.put(url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

/** 
 * delete方法，对应delete请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function delet(url, params) {
    // console.log(params)
    return new Promise((resolve, reject) => {
        axios.delete(url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}