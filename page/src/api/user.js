import {axios} from "@/utils/request.js";

//登录
export const login=(data)=>axios.post("/api/user/login",data);

//用户管理
//添加用户
export const addusers=(data)=>axios.post("/api/user",data);

//更新用户
export const updateUsers=(data)=>axios.put("/api/user/user",data);

//添加身份
export const addIders=(data)=>axios.get("/api/user/identity/edit",{
    params:{
        ...data
    }
})

//添加api接口权限
export const addApis=(data)=>axios.get("/api/user/authorityApi/edit",{
    params:{
        ...data
    }
})

//添加视图权限
export const addViews=(data)=>axios.get("/api/user/authorityView/edit",{
    params:{
        ...data
    }
});

//给身份设置api接口权限
export const setapis=(data)=>axios.post("/api/user/setIdentityApi",data);

//给身份设置视图权限
export const setviews=(data)=>axios.post("/api/user/setIdentityView",data);


