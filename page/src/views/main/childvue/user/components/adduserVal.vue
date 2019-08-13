<template>
  <div class="mian_con_item">
    <el-button
      :class="['title',ind==key?'active':'']"
      @click="changes(key)"
      v-for="(item,key) in addlist"
      :key="key"
    >{{item.title}}</el-button>
    <div class="main_item_child" v-show="ind==0">
      <el-input class="inps" v-model="Ausername" placeholder="请输入用户名"></el-input>
      <el-input class="inps"  v-model="Auserpwd" placeholder="请输入密码"></el-input>
      <el-select v-model="AIdentity" placeholder="请选择">
        <el-option
          v-for="item in allIdentity"
          :key="item.identity_id"
          :label="item.identity_text"
          :value="item.identity_id"
        ></el-option>
      </el-select>
    </div>
    <div class="main_item_child" v-show="ind==1">
      <el-select v-model="userid" placeholder="请选择">
        <el-option
          v-for="item in alluser"
          :key="item.user_id"
          :label="item.user_name"
          :value="item.user_id"
        ></el-option>
      </el-select>
      <el-input class="inps" v-model="Uusername" placeholder="请输入用户名"></el-input>
      <el-input class="inps" v-model="Uuserpwd" placeholder="请输入密码"></el-input>
      <el-select v-model="UIdentity" placeholder="请选择" class="shenfen">
        <el-option
          v-for="item in allIdentity"
          :key="item.identity_id"
          :label="item.identity_text"
          :value="item.identity_id"
        ></el-option>
      </el-select>
    </div>
    <!-- 添加按钮 -->
    <addbtns @ok="addUser()" @react="valnulls()"/>
  </div>
</template>
<script>
import addbtns from "./btnsV"
import { addusers, updateUsers } from "@/api/user.js";
export default {
  props: {
    alluser: Array,
    allIdentity: Array
  },
  components: {
      addbtns
  },
  data() {
    return {
      ind: 0,
      userid: "",
      Uusername: "",
      AIdentity: "", //身份id
      UIdentity: "", //更新的
      Uuserpwd: "",
      Ausername: "",
      Auserpwd: "",
      addlist: [
        {
          title: "添加用户"
        },
        {
          title: "更新用户"
        }
      ]
    };
  },
  computed: {},
  methods: {
    //切换
    changes(key) {
      this.ind = key;
    },
    //点击重置
    valnulls() {
      this.userid = "";
      this.Uusername = "";
      this.UIdentity = ""; //身份id
      this.AIdentity = ""; //身份id
      this.Uuserpwd = "";
      this.Ausername = "";
      this.Auserpwd = "";
    },
    //添加后者更新用户
    addUser() {
      if (this.ind == 0) {
        if (
          this.Ausername !== "" &&
          this.Auserpwd !== "" &&
          this.AIdentity !== ""
        ) {
          // 添加
          addusers({
            user_name: this.Ausername,
            user_pwd: this.Auserpwd,
            identity_id: this.AIdentity
          }).then(res => {
            if (res.code) {
              this.$message({
                type: "success",
                message: res.msg
              });
              this.valnulls();
            } else {
              this.$message({
                type: "error",
                message: res.msg
              });
              return;
            }
          });
        }else{
            this.$message({
                type: "error",
                message: "内容不能为空"
            });
        }
      } else {
        // 更新用户
        updateUsers({
          user_id: this.userid,
          user_name: this.Uusername,
          user_pwd: this.Uuserpwd,
          identity_id: this.UIdentity
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
      }
    }
  }
};
</script>
<style  lang="scss">
.mian_con_item {
  width: 360px;
  height: 330px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  .title {
    padding: 8px 15px;
    background: #fff;
    border: 1px solid #ccc;
    margin: 0;
  }
  .active {
    border-color: blue;
    color: blue;
  }
}
.inps {
  width: 100%;
  margin: 5px 0px;
}
.el-select {
  margin: 5px 0;
}
</style>