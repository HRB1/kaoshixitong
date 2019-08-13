<template>
  <div class="mian_con_item">
    <el-button class="active title">添加身份</el-button>
    <el-input class="inps" type="text" v-model="identity_text" placeholder="请输入身份名称"></el-input>
    <addbtns @ok="addIder()" @react="valnull()"/>
  </div>
</template>
<script>
import { addIders } from "@/api/user.js";
import addbtns from "./btnsV"; //添加按钮
export default {
  props: {},
  components: {
    addbtns
  },
  data() {
    return {
      identity_text: "" //身份名称
    };
  },
  computed: {},
  methods: {
    //添加身份
    addIder() {
      if (this.identity_text !== "") {
        addIders({ identity_text: this.identity_text }).then(res => {
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
      this.identity_text = "";
    }
  },
};
</script>
<style scoped lang="">
</style>