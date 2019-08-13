import Vue from "vue";
Vue.filter("fristUpperCase",(value,value1)=>{
    return value&& value.substr(0,1).toUpperCase()+value.substr(1)+":"+value1
})