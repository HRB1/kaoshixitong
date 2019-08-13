import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import "@/static/styles/common.scss";
import 'element-ui/lib/theme-chalk/index.css';
import "@/config/element";
import 'mavon-editor/dist/css/index.css';//编译器
import mavonEditor from "mavon-editor" ;//编译器
Vue.use(mavonEditor)
// import fristUpperCase  from "@/filters/fristUpperCase";
Vue.config.productionTip = false
// Vue.use(Button)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
