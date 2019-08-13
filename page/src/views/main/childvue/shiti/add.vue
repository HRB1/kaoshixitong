<template>
  <div class="container">
    <h2 class="header_title">添加试题</h2>
    <div class="main">
      <div class="inpts">
        <p>题目信息</p>
        <p>题干</p>
        <el-input class="stem" v-model="questions_stem" placeholder="请输入题目标题，不超过20个字"></el-input>
        <div class="mavon">
          <p>题目主题</p>
          <mavon-editor :subfield="false" v-model="mavonValue"/>
        </div>
      </div>
      <div class="topic_type">
        <div class="select_item">
          <p>请选择考试类型：</p>
          <el-select v-model="examType"  placeholder="请选择">
            <el-option
              v-for="item in comstates.allexams"
              :key="item.value"
              :label="item.exam_name"
              :value="item.exam_id"
            ></el-option>
          </el-select>
        </div>
        <div class="select_item">
          <p>请选择课程类型：</p>
          <el-select v-model="classType" placeholder="请选择">
            <el-option
              v-for="item in comstates.allcurriculums"
              :key="item.value"
             :label="item.subject_text"
              :value="item.subject_id"
            ></el-option>
          </el-select>
        </div>
        <div class="select_item">
          <p>请选择题目类型：</p>
          <el-select v-model="stemType"  placeholder="请选择">
            <el-option
              v-for="item in comstates.allquestionss"
              :key="item.value"
              :label="item.questions_type_text"
              :value="item.questions_type_id"
            ></el-option>
          </el-select>
        </div>
      </div>
        <div class="mavon1">
          <p>答案信息</p>
          <mavon-editor :subfield="false" v-model="AnswerValue"/>
        </div>
      <el-button class="addbtns" type="button" @click="submitfn()">提交</el-button>
    </div>
  </div>
</template>
<script>
import {mapState} from "vuex";
import {addQuestions} from "@/api/tests";
// import selectItem from "./components/selectItem";
export default {
  props: {},
  components: {
      
  },
  data() {
    return {
            questions_stem: "", //题干
            mavonValue: "", //编译器值
            AnswerValue:"",//答案信息
            examType: "",//考试类型
            classType: "", //课程类型
            stemType: "", //题目类型
    };
  },
  computed: {
      //模块名
      ...mapState(["comstates"])
  },
  methods: {
    //点击添加
    submitfn() {
          let user_id=JSON.parse(sessionStorage.getItem('userInfo')).data.user_id;
         this.$confirm('真的要添加吗？', '你确定要添加这道试题吗?', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            if(this.examType!==""&& this.stemType!==""&&this.classType!==""){
                addQuestions({
                    exam_id: this.examType,
                    questions_answer: this.AnswerValue,
                    questions_stem:this.mavonValue,
                    questions_type_id: this.stemType,
                    subject_id:this.classType,
                    title: this.questions_stem,
                    user_id: user_id
                }).then(res=>{
                    this.$message({
                        type: 'success',
                        message: res.msg
                    });
                     this.questions_stem= "" //题干
                      this.mavonValue= "" //编译器值
                      this.AnswerValue=""//答案信息
                      this.examType= ""//考试类型
                      this.classType= "" //课程类型
                      this.stemType= "" //题目类型
                })
            }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      
        
      
    }
  },
  created() {
     
  },
  mounted() {
      
  }
};
</script>
<style scoped lang="scss">
@import "@/static/styles/addstem.scss";

</style>