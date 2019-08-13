<template>
  <div class="container">
    <h2 class="header_title">查看试题</h2>
    <div class="mains">
      <div class="main_header">
        <div class="main_head_top">
          <span class="head_top_tit">课程类型</span>
          <ul class="head_top_con">
            <li
              v-for="(item,ind) in allcurriculums"
              :class="item.flag?'active':''"
              :key="ind"
              @click="changeActive(ind,item.subject_text)"
            >{{item.subject_text}}</li>
          </ul>
        </div>
        <div style="clear:both"></div>
        <div class="head_bot_con">
          <div class="select_item">
            <span>考试类型：</span>
            <el-select class="selects" v-model="examType" placeholder="请选择">
              <el-option
                v-for="item in allexams"
                :key="item.value"
                :label="item.exam_name"
                :value="item.exam_id"
              ></el-option>
            </el-select>
            <span class="select_right">题目类型：</span>
            <el-select class="selects" v-model="stemType" placeholder="请选择">
              <el-option
                v-for="item in allquestionss"
                :key="item.value"
                :label="item.questions_type_text"
                :value="item.questions_type_id"
              ></el-option>
            </el-select>
            <el-button class="serchbtn" @click="serachList()">
              <i class="el-icon-search" style="margin-right:10px;"></i>查询
            </el-button>
          </div>
        </div>
      </div>
      <div class="main_list" v-if="allStemlist.length">
        <div class="main_list_item" v-for="(item,ind) in allStemlist" :key="ind" @click="goDetail(item.questions_id)">
          <p class="title">{{item.title}}</p>
          <div class="list_item">
            <el-button class="btn1">{{item.questions_type_text}}</el-button>
            <el-button class="btn2">{{item.subject_text}}</el-button>
            <el-button class="btn3">{{item.exam_name}}</el-button>
            <span class="edit" @click.stop="goEidt(item.questions_id)">编辑</span>
          </div>
          <p class="bot_tit">{{item.user_name}} 发布</p>
        </div>
      </div>
      <h2 v-else class="errorText">没有内容!!!</h2>
    </div>
  </div>
</template>
<script>
import { whereStem } from "@/api/tests.js";
import { getAllStem} from "@/api/getAlldata.js";
import { mapState, mapMutations } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      indx: null,
      examType: "", //考试类型
      stemType: "", //题目类型
      subject_id: "", //课程id
      allStemlist: [] //所有试题
    };
  },
  computed: {
    ...mapState("comstates", ["allcurriculums", "allquestionss", "allexams"])
  },
  methods: {
    ...mapMutations("comstates", ["updatecurriculums"]),
    //修改高亮
    changeActive(ind) {
      this.updatecurriculums(ind);
      if (ind !== 0) {
      } else {
        this.subject_id = "";
      }
    },
    //筛选数据
    serachList() {
      this.subject_id = this.allcurriculums.find(item => item.flag).subject_id;
      if (
        this.examType !== "" &&
        this.stemType !== "" &&
        this.subject_id !== ""
      ) {
        whereStem({
          subject_id: this.subject_id,
          exam_id: this.examType,
          questions_type_id: this.stemType
        }).then(res => {
          this.allStemlist = res.data;
        });
      }
    },

    //点击列表进入详情
    goDetail(questions_id){
        this.$router.push({path:"/main/questionsDetail",query:{id:questions_id}})
    },
    //进入编辑页面
    goEidt(questions_id){
        this.$router.push({path:"/main/editQuestions",query:{id:questions_id}})
    }
  },
  created() {
    //获取所有试题
    getAllStem().then(res => {
      this.allStemlist = res.data;
    });
  },
  mounted() {}
};
</script>
<style  lang="scss">
  @import "@/static/styles/watchStem.scss";
</style>