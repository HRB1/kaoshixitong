<template>
  <div class="mian_con_item">
    <el-button class="active title">给身份设置视图权限</el-button>
    <el-select v-model="identity_id" placeholder="请选择身份id">
      <el-option
        v-for="item in allIdentity"
        :key="item.identity_id"
        :label="item.identity_text"
        :value="item.identity_id"
      ></el-option>
    </el-select>
    <el-select v-model="view_authority_id" placeholder="请选择视图权限">
      <el-option
        v-for="item in allviews"
        :key="item.view_authority_id"
        :label="item.view_authority_text"
        :value="item.view_authority_id"
      ></el-option>
    </el-select>
    <addbtns @ok="addview()" @react="valnull()"/>
  </div>
</template>
<script>
import { setviews } from "@/api/user";
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
      view_authority_id: ""
    };
  },
  computed: {
    ...mapState("comstates", ["allIdentity", "allviews"])
  },
  methods: {
    addview() {
      if (this.identity_id !== "" && this.view_authority_id !== "") {
        setviews({
          identity_id: this.identity_id,
          view_authority_id: this.view_authority_id
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
      this.view_authority_id = "";
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
</style>