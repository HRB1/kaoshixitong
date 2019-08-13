<template>
  <div class="mian_con_item">
    <el-button class="active title">给身份设置api接口权限</el-button>
    <el-select v-model="identity_id" placeholder="请选择身份id">
      <el-option
        v-for="item in allIdentity"
        :key="item.identity_id"
        :label="item.identity_text"
        :value="item.identity_id"
      ></el-option>
    </el-select>
    <el-select v-model="api_authority_id" placeholder="请选择api接口">
      <el-option
        v-for="item in allApis"
        :key="item.api_authority_id"
        :label="item.api_authority_text"
        :value="item.api_authority_id"
      ></el-option>
    </el-select>
    <addbtns @ok="addapi()" @react="valnull()"/>
  </div>
</template>
<script>
import { setapis } from "@/api/user";
import { mapState } from "vuex";
import addbtns from "./btnsV"; //添加按钮
export default {
  props: {},
  components: {
    addbtns
  },
  data() {
    return {
      identity_id: "",
      api_authority_id: ""
    };
  },
  computed: {
    ...mapState("comstates", ["allIdentity", "allApis"])
  },
  methods: {
    addapi() {
      if (this.identity_id !== "" && this.api_authority_id !== "") {
        setapis({
          identity_id: this.identity_id,
          api_authority_id: this.api_authority_id
        }).then(res => {
         
          if (res.code) {
            this.$message({
              type: "success",
              message: res.msg
            });
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
          msg: "内容不能为空"
        });
      }
    },
    valnull() {
      this.identity_id = "";
      this.api_authority_id = "";
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
</style>