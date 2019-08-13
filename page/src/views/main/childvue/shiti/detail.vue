<template>
  <div class="container">
    <h2 class="header_title">试题详情</h2>
    <div class="mainss" v-if="stemDetail.length">
      <div class="main_stem">
        <p class="username">出题人：{{usernames}}</p>
        <p>题目信息</p>
        <div class="list_item">
          <el-button class="btn1">{{stemDetail[0].exam_name}}</el-button>
          <el-button class="btn2">{{stemDetail[0].questions_type_text}}</el-button>
          <el-button class="btn3">{{stemDetail[0].subject_text}}</el-button>
        </div>
        <div class="stemname">
          <pre>
            <code class="language-js">
              {{stemDetail[0].questions_stem}}
            </code>
          </pre>
        </div>
      </div>
      <div class="main_stemAnu">
        <p>答案信息</p>
        <div class="stemAnu_con">
          <pre>
            <code class="language-js">
              {{stemDetail[0].questions_answer}}
            </code>
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { detailStem } from "@/api/tests.js";
export default {
  props: {},
  components: {},
  data() {
    return {
      usernames: "",
      stemDetail: []
    };
  },
  computed: {},
  methods: {},
  created() {
    this.usernames = JSON.parse(
      sessionStorage.getItem("userInfo")
    ).data.user_name;
    detailStem({
      questions_id: this.$route.query.id
    }).then(res => {
      this.stemDetail = res.data;
    });
  },
  mounted() {}
};
</script>
<style  lang="scss">
@import "@/static/styles/stemdetail.scss";
</style>