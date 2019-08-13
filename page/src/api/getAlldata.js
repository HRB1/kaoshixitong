import {axios} from "@/utils/request.js";
//获取当前用户信息
export const userInfo=()=>axios.get("/api/user/userInfo");

//获取用户视图权限
export const userView=(data)=>axios.get("/api/user/new",{
    params:{
        user_id:data.user_id
    }
});

//获取用户数据
export const getuser=()=>axios.get("/api/user/user");

//获取身份数据
export const getuserSf=()=>axios.get("/api/user/identity");

//获取用户接口权限
export const allApi=()=>axios.get("/api/user/api_authority");

//获取视图权限接口
export const getViews=()=>axios.get("/api/user/view_authority");

//获取身份和api接口关系
export const getSfApis=()=>axios.get("/api/user/identity_api_authority_relation");

//获取身份和视图关系
export const getSfViews=()=>axios.get("/api/user/identity_view_authority_relation")

//获取所有身份
export const getIder=()=>axios.get("/api/user/identity");


//获取所有试题
export const getAllStem=()=>axios.get("/api/exam/questions/new");

//获取所有课程接口
export const allcurriculum=()=>axios.get("/api/exam/subject");

//获取所有试题类型
export const allquestions=()=>axios.get("/api/exam/getQuestionsType");

//获取所有考试类型
export const allexam=()=>axios.get("/api/exam/examType");
