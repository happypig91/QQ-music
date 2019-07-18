
import request  from '@/utils/request';

export function userLogin(params){
    console.log(params)
    const url='/api/user/login';
   return request.post(url,params)
}


