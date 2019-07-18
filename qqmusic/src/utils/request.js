import axios from 'axios'
import {getSession} from '@/utils'
import qs from 'qs';
import {Message} from 'element-ui';
import {responseText} from './config';

//axios的拦截
const getToken=()=>getSession('token')==null?'':getSession('token');

const request=axios.create({
    timeout:500
})

//拦截请求
request.interceptors.request.use(config=>{
     console.log(config)
     config.method == 'post'?
     config.data=qs.stringify({
         ...config.data
     })
     :config.params={...config.params};
     config.headers['Content-Type']='application/x-www-form-urlencoded';
     config.headers['authrization']=getToken();
     return config;
})

//拦截响应
request.interceptors.response.use(res=>{
   if(res.status === 401 || res.status === 500){
     Message({
         type:responseText[res.status].type || 'success',
         message:responseText[res.status].message || ''
     })
   }
    return res;
},err=>{
    return Promise.reject(err);
})
export default request;