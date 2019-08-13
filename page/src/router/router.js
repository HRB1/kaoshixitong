import Vue from 'vue'
import Router from "vue-router";
import childrens from "./main";//main下的子路由

Vue.use(Router);
//判断是否登陆
const islogin=(to,from,next)=>{
  let token=sessionStorage.getItem("authorization");
   if(token&&token.split(".").length && sessionStorage.getItem("userInfo")){
     next()
   }else{
    next("/login")
   }
}

const router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:"/login"
    },
    {
      path: '*',
      beforeEnter:islogin,
      component: () => import("../views/main/childvue/notFont.vue")//404页面
    },
    {
      path: '/notIde',
      component: () => import("../views/main/childvue/notIde.vue")//没有权限页面
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("../views/login/login.vue")
    },
    {
      path: '/main',
      name: 'main',
      beforeEnter:islogin,
      component: () => import("../views/main/main.vue"),
      children:childrens.Croutes
    }
  ]
})

export default router;