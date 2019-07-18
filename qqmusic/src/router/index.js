import Vue from 'vue'
import Router from 'vue-router'
import {routes} from './routes'

Vue.use(Router)

const router=new Router({
  mode:'history', //前端路由两种 hash(不会给服务端发送  有#)  history(会给服务端发送)
  linkActiveClass:'active',
  routes
})

//导航守卫
router.beforeEach((to,from,next)=>{
  const requireAuth=to.meta.autorization;
  //判断路由也是否需要登录
  if(requireAuth){
    const token=window.$store.state.Login.token;
    if(token){
      next()
    }else{
      next('/login')
    }
  }else{
     next()
  }
 
})
export default router;
