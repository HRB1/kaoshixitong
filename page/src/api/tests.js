import {axios} from "@/utils/request.js";
//试题管理
//添加试题
export const addQuestions=(data)=>axios.post("/api/exam/questions",data);

//添加试题类型
export const addStemType=(data)=>axios.get("/api/exam/insertQuestionsType",{
    params:{
        text:data.stemText,
        sort:data.sort
    }
})



//按条件获取试题
export const whereStem=(data)=>axios.get("/api/exam/questions/condition",{
    params:{
        ...data
    }
})

//获取试题详情
export const detailStem=(data)=>axios.get("/api/exam/questions/condition",{
    params:{
        ...data
    }
})

//更新试题
export const updateStem=(data)=>axios.put("/api/exam/questions/update",data);

