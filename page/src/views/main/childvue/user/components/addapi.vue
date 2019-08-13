<template>
  <div class="mian_con_item">
    <el-button class="active title">添加api接口权限</el-button>
    <el-input class="inps" type="text" v-model="api_name" placeholder="请输入api接口名称"></el-input>
    <el-input class="inps" type="text" v-model="api_url" placeholder="请输入api接口url"></el-input>
    <el-input class="inps" type="text" v-model="api_fun" placeholder="请输入api接口方法"></el-input>
    <addbtns @ok="addApi()" @react="valnull()"/>
  </div>
</template>
<script>
import { addApis } from "@/api/user.js";
import addbtns from "./btnsV"; //添加按钮
export default {
  props: {},
  components: {
    addbtns
  },
  data() {
    return {
      api_name: "",
      api_url: "",
      api_fun: ""
    };
  },
  computed: {},
  methods: {
    //添加api接口权限
    addApi() {
      if (this.api_name !== "" && this.api_url !== "" && this.api_fun !== "") {
        addApis({
          api_authority_text: this.api_name,
          api_authority_url: this.api_url,
          api_authority_method: this.api_fun
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
          type: "success",
          msg: "内容不能为空"
        });
      }
    },
    valnull() {
      this.api_name = "";
      this.api_url = "";
      this.api_fun = "";
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
</style>