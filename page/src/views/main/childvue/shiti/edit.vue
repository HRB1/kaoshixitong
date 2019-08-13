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
      <el-button type="button" class="addbtns" @click="submitfn()">提交</el-button>
    </div>
  </div>
</template>
<script>
import {mapState} from "vuex";
import {detailStem,updateStem} from "@/api/tests";
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
         this.$confirm('真的要修改吗？', '你确定要修改这道试题吗?', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center:true,
        }).then(() => {
            if(this.examType!==""&&this.questions_stem!==""&& this.stemType!==""&&this.classType!==""){
                updateStem({
                    exam_id: this.examType,
                    questions_answer: this.AnswerValue,
                    questions_stem:this.mavonValue,
                    questions_type_id: this.stemType,
                    subject_id:this.classType,
                    title: this.questions_stem,
                    questions_id: this.$route.query.id
                }).then(res=>{
                    this.$message({
                        type: 'success',
                        message: res.msg
                    });
                    this.$router.push({path:"/main/watchQuestions"})
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
    detailStem({
      questions_id: this.$route.query.id
    }).then(res => {
        this.questions_stem=res.data[0].title;
        this.mavonValue=res.data[0].questions_stem;
        this.examType=res.data[0].exam_id;
        this.classType=res.data[0].subject_id;
        this.stemType=res.data[0].questions_type_id;
        this.AnswerValue=res.data[0].questions_answer;
    });
  },
  mounted() {
      
  }
};
</script>
<style scoped lang="scss">
@import "@/static/styles/addstem.scss";
</style>