import userViews from "@/utils/getView";
//验证权限
const checkView = async (to, from, next) => {
    let { view_id } = to.meta;
    let data =await userViews()
    let index=data.findIndex(item => item.view_id === view_id);
      if (index >= 0) {
        //有权限继续往下执行
          next();
        } else {
          next("/notIde");
        }
};
const Croutes = [
  {
    path: "/main",
    redirect: "index"
  },
  {
    path: "index", //欢迎页面
    name: "index",
    component: () => import("../views/main/childvue/index.vue")
  },
  //式题
  {
    path: "addQuestions",
    beforeEnter: checkView,
    meta: {
      // silde:true,//是否显示在导航栏
      view_id: "main-addQuestions",
      title: "添加试题",
      type: "Question"
    },
    component: () => import("../views/main/childvue/shiti/add.vue")
  },
  {
    path: "watchQuestions",
    beforeEnter: checkView,
    meta: {
      // silde:true,//是否显示在导航栏
      view_id: "main-watchQuestions",
      title: "查看试题",
      type: "Question"
    },
    component: () => import("../views/main/childvue/shiti/watch.vue")
  },
  {
    path: "editQuestions",
    beforeEnter: checkView,
    meta: {
      silde: true, //是否显示在导航栏
      view_id: "main-editQuestions",
      title: "编辑试题",
      type: "Question"
    },
    component: () => import("../views/main/childvue/shiti/edit.vue")
  },
  {
    path: "questionsDetail",
    beforeEnter: checkView,
    meta: {
      silde: true, //是否显示在导航栏
      view_id: "main-questionsDetail",
      title: "试题详情",
      type: "Question"
    },
    component: () => import("../views/main/childvue/shiti/detail.vue")
  },
  {
    path: "questionsType",
    beforeEnter: checkView,
    meta: {
       
      view_id: "main-questionsType",
      title: "试题分类",
      type: "Question"
    },
    component: () => import("../views/main/childvue/shiti/type.vue")
  },
  //班级
  {
    path: "grade",
    beforeEnter: checkView,
    meta: {
      view_id: "main-grade",
      title: "班级管理",
      type: "grade"
    },
    component: () => import("../views/main/childvue/banji/grade.vue")
  },
  {
    path: "student",
    beforeEnter: checkView,
    meta: {
      view_id: "main-student",
      title: "学生管理",
      type: "grade"
    },
    component: () => import("../views/main/childvue/banji/student.vue")
  },
  {
    path: "room",
    beforeEnter: checkView,
    meta: {
      view_id: "main-room",
      title: "教室管理",
      type: "grade"
    },
    component: () => import("../views/main/childvue/banji/room.vue")
  },

  //考试
  {
    path: "addExam",
    beforeEnter: checkView,
    meta: {
      view_id: "main-addExam",
      title: "添加考试",
      type: "Exam"
    },
    component: () => import("../views/main/childvue/exam/add.vue")
  },
  {
    path: "examList",
    beforeEnter: checkView,
    meta: {
      view_id: "main-examList",
      title: "试卷列表",
      type: "Exam"
    },
    component: () => import("../views/main/childvue/exam/examlist.vue")
  }
  //用户
  ,
  {
    path: "addUser",
    beforeEnter: checkView,
    meta: {
      view_id: "main-addUser",
      title: "添加用户",
      type: "user"
    },
    component: () => import("../views/main/childvue/user/adduser.vue")
  },
  {
    path: "showUser",
    beforeEnter: checkView,
    meta: {
      view_id: "main-showUser",
      title: "用户展示",
      type: "user"
    },
    component: () => import("../views/main/childvue/user/userview.vue")
  }

];
let listnav={
    Question:{
      title:"试题管理",
        icon:"el-icon-s-fold"
    },
    grade:{
      title:"班级管理",
      icon:"el-icon-s-management"
    },
    user:{
      title:"用户管理",
      icon:"el-icon-s-custom"
    },
    Exam:{
      title:"考试管理",
      icon:"el-icon-s-order"
    }
}



//筛选导航数据
const setnav=()=>{
  if(userViews().length){
    let userViewss=userViews();
    
    let newlist=Croutes.filter(item=>item.beforeEnter);
    //根据用户id获取权限
    return Object.keys(listnav).map(key=>{
        let children=newlist.filter(items=>{
          let {view_id,type}=items.meta;
           return  userViewss.find(itemss=>itemss.view_id==view_id)&&!items.meta.silde && key==type
        })
        if(children.length){
            return {
              title:listnav[key].title,
              icon:listnav[key].icon,
              children
            }
        }else{
          return null;
        }
    }).filter(item=>item)
  }
}
export default {
    Croutes,
    setnav
};
