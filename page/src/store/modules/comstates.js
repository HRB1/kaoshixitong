import {allApi,allcurriculum,allquestions,allexam,getIder,getuser,getViews} from "@/api/getAlldata"
const state = {
    allexams:[],//所有考试类型
    allcurriculums:[],//所有课程
    allquestionss:[],//所有试题
    allApis:[],//所有接口,
    allIdentity:[],//所有身份
    alluser:[],//所有用户,
    allviews:[],//所有视图
};
const mutations = {
     setallexams(state,obj){
        state.allexams=obj;
    },
     setallcurriculums(state,obj){
        obj.forEach(item=>{
            item.flag=false
         })
        state.allcurriculums=obj;
        state.allcurriculums.unshift({
            subject_id:"0",
            subject_text:"all",
            flag:false
        });
     },
     setallquestionss(state,obj){
        state.allquestionss=obj;
     },
     //修改状态
     updatecurriculums(state,ind){
         if(ind==0){
           //点击所有all，所有课程都高亮
           state.allcurriculums[ind].flag=!state.allcurriculums[ind].flag
           state.allcurriculums.forEach(item=>{
                item.flag=state.allcurriculums[ind].flag
           }) 
         }else{
           state.allcurriculums.forEach(item=>{
                item.flag=false
           }) 
           state.allcurriculums[ind].flag=true    
         }
     },
     setallApis(state,obj){
        state.allApis=obj;
     },
     setAllIdentity(state,obj){
         state.allIdentity=obj;
     },
     setalluser(state,obj){
         state.alluser=obj
     },
     setallviews(state,obj){
         state.allviews=obj
     }
};
const getters = {
           
};
const actions = {
    //异步请求
    getAllexams({commit}){
        allexam().then(res=>{
            commit("setallexams", res.data);
        })
    },
    getAllcurriculums({commit}){
        allcurriculum().then(res=>{
            commit("setallcurriculums", res.data);
        })
    },
    getAllquestionss({commit}){
        allquestions().then(res=>{
            commit("setallquestionss", res.data);
        })
    },
    getAllApi({commit}){
        allApi().then(res=>{
            commit("setallApis", res.data);
        })
    },
    getAllIdentity({commit}){
        getIder().then(res=>{
            commit("setAllIdentity",res.data);
        })
    },
    getAlluser({commit}){
        getuser().then(res=>{
            commit("setalluser",res.data)
        })
    },
    getAllview({commit}){
        getViews().then(res=>{
            commit("setallviews",res.data);
        })
    }
};


export default{
    namespaced:true,
    state,
    mutations,
    getters,
    actions
}