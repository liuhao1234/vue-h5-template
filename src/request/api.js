import { 
    get, 
    post 
} from './http'

// 登录页面api
export let login = p => post('/aaa', p); //登录
export let getCode = p => get('/bbb', p); //登录

