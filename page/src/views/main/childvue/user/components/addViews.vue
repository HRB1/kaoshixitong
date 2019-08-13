<template>
  <div class="mian_con_item">
    <el-button class="active title">添加视图接口权限</el-button>
    <el-select v-model="viewId" placeholder="请选择已有视图权限">
      <el-option
        v-for="item in allviews"
        :key="item.view_id"
        :label="item.view_authority_text"
        :value="item.view_id"
      ></el-option>
    </el-select>
    <addbtns @ok="addView()" @react="valnull()"/>
  </div>
</template>
<script>
import { addViews } from "@/api/user.js";
import addbtns from "./btnsV"; //添加按钮
import { mapState } from "vuex";
export default {
  props: {},
  components: {
    addbtns
  },
  data() {
    return {
      viewId: ""
    };
  },
  computed: {
    ...mapState("comstates", ["allviews"])
  },
  methods: {
    addView() {
      let { view_authority_text } = this.allviews.find(
        item => item.view_id == this.viewId
      );
      if (this.viewId !== "" && view_authority_text !== "") {
        addViews({
          view_id: this.viewId,
          view_authority_text
        }).then(res => {
          if (res.code) {
            this.$message({
              type: "success",
              message: res.msg
            });
            this.valnull();
          } else {
            this.$message({
              type: "error",
              message: res.msg
            });
          }
        });
      } else {
        this.$message({
          type: "error",
          message: "内容不能为空"
        });
      }
    },
    valnull() {
      this.viewId = "";
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
</style>